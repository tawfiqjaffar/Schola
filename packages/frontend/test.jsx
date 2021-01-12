constructor(props) {
    super(props);
    this.state = {name: '', message: '', email: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(key) {
    return function (e) {
        var state = {};
        state[key] = e.target.value;
        this.setState(state);
    }.bind(this);
}

handleSubmit(event) {
    var data = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
    }
    /* BEGIN POST DATAS TO PHP */
        
    /* END POST DATAS TO PHP */
    event.preventDefault();
}