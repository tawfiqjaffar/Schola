import React from 'react';
import PropTypes from 'prop-types'
import {TextField, Button} from '@material-ui/core';
import validateInput from '../../../utils/validator';
import { connect } from 'react-redux';
import { login } from '../../../actions/authActions';
import './LoginPage.css';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          errors: {},
          isLoading: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);
        if (!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.login(this.state).then(
            (res) => this.context.router.push('/')
            );
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { errors, username, password, isLoading } = this.state;
        return (
            <div className="container">
                <div className="top"></div>
                <div className="bottom"></div>
                <div className="center">
                    <p className="bold">Bienvenue sur SCHOLA</p>
                    <TextField
                        name="username"
                        id="standard-required"
                        label="Username"
                        variant="outlined"
                        InputLabelProps = {{
                            style: { color: '#333' },
                        }}
                        className="padbot-20"
                        value={username}
                        error={errors.username}
                        onChange={this.onChange}
                        />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        InputLabelProps = {{
                            style: { color: '#333' },
                        }}
                        variant="outlined"
                        value={password}
                        error={errors.password}
                        onChange={this.onChange}
                        />
                    <Button onClick={this.onSubmit}
                        variant="contained"
                        className="margtop-20"
                        >Connexion</Button>
                </div>
            </div>
        );
    }
};

Login.propTypes = {
    login: PropTypes.func.isRequired
  }

Login.contextTypes = {
    router: PropTypes.object.isRequired
  }

export default connect(null, { login })(Login);