import React from 'react';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import styles from './app-style';
import { postQuizz } from '../../../api/methods/quizz';
import { Button } from "@material-ui/core";

class App extends React.Component {
    lastTimeButtonClicked = new Date().getTime();

    state = {
        question1: {},
        question2: {},
        question3: {},
        question4: {},
        question5: {},
        question6: {},
        question7: {},
        question8: {},
        question9: {},
        question10: {},
        quizzName: '',
        type: "match-word"
    };


    submit = async () => {
        await postQuizz(this.state)
    }

    setField = (question, val, choix) => {
        if (!choix) {
            this.setState({ [question]: { ...this.state[question], label: val } })
        } else {
            this.setState({ [question]: { ...this.state[question], [choix]: val } })
        }
        console.log(this.state)
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper id="mainContainer" className={classes.paper + ' quizzForm'} elevation={2}>
                Creation de quizz
                <div>
                    <input type={'text'} onChange={(e) => this.setState({ quizzName: e.target.value })}
                        placeholder={'nom du quizz'} name={'quizzName'} className={'quizzInput'} />
                </div>
                <div>
                    {[...Array(10)].map((el, index) =>
                        <>
                            <input type={'text'}
                                onChange={(e) => (this.setField('question' + (index + 1), e.target.value))}
                                placeholder={'Question' + (index + 1)} name={'question' + (index + 1)}
                                className={'quizzInput'} />
                            <input type={'text'}
                                onChange={(e) => (this.setField('question' + (index + 1), e.target.value, 'choix1'))}
                                placeholder={'choix1'} name={'answer1'} className={'quizzInput'} />
                            <input onChange={(e) => (this.setField('question' + (index + 1), e.target.value, 'choix2'))}
                                type={'text'} placeholder={'choix2'} name={'answer2'} className={'quizzInput'} />
                            <input onChange={(e) => (this.setField('question' + (index + 1), e.target.value, 'choix3'))}
                                type={'text'} placeholder={'choix3'} name={'answer3'} className={'quizzInput'} />
                            <input
                                onChange={(e) => (this.setField('question' + (index + 1), e.target.value, 'correct'))}
                                type={'number'} min={1} max={3} placeholder={'correct'} name={'correct'}
                                className={'quizzInput'} />
                        </>)}

                    <Button onClick={this.submit}>GO</Button>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(App);
