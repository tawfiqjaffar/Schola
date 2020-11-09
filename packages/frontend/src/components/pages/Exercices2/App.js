import React from 'react';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Answer from './components/Answer/Answer';
import Result from './components/Result/Result';
import QuestionParagraph from './components/Question/Question.js';
import {withStyles} from '@material-ui/core/styles';
import styles from './app-style';
import questionsFactory from './models/factories/get-questions-factory';
import submitFactory from './models/factories/submit-questions-factory';
import axios from 'axios';

import CircularLoading from './components/CircularLoading';

import getQuestions from './models/services/questions/local/get-questions';
import {Link} from "react-router-dom";

class App extends React.Component {
    lastTimeButtonClicked = new Date().getTime();

    state = {
        questions: null,
        result: null,
        questionsAnswers: [],
        currentQuestionIndex: 0,
        step: 0,
        grades: [],
        score: 0,
    };

    componentDidUpdate(prevProps, prevState) {
        this.updateButtonsPos();

        setTimeout(() => {
            this.updateButtonsPos();
        }, 0);
    }

    componentDidMount() {
        window.onorientationchange = () => this.updateButtonsPos();
        window.onresize = () => this.updateButtonsPos();

        questionsFactory(false).then((value) => {
            this.setState({questions: value}, () => {
                this.updateButtonsPos();
            });
        });

        this.updateButtonsPos();

        setTimeout(() => {
            this.updateButtonsPos();
        }, 0);
        this.getAllGrades()
    }

    onNextClick = (e) => {
        const currentState = this.state;

        if (
            currentState.currentQuestionIndex === currentState.questions.length - 1 ||
            this.areButtonsAnimating()
        ) {
            return;
        }

        console.log(currentState.currentQuestionIndex);
        this.updatePage(++currentState.currentQuestionIndex);
    };

    onPrevClick = (e) => {
        const currentState = this.state;

        if (currentState.currentQuestionIndex === 0 || this.areButtonsAnimating()) {
            return;
        }

        this.updatePage(--currentState.currentQuestionIndex);
    };

    onSubmitClick = async () => {
        const currentState = this.state;

        this.setState({
            questions: null,
            questionsAnswers: [],
            currentQuestionIndex: 0,
        });

        let result = await submitFactory(
            null,
            currentState.questions,
            currentState.questionsAnswers
        );
        this.setState({
            result,
        });

        this.postGrade();
    };

    onTryAgainPressed = async () => {
        this.setState({
            questions: null,
            questionsAnswers: [],
            currentQuestionIndex: 0,
            result: null,
        });

        this.setState({
            questions: await getQuestions(),
        });
    };

    onAnswerSelected = (answerId) => {
        let clickedAnswerIndex = answerId;
        let currentState = this.state;
        const currentAnswers = this.state.questionsAnswers;
        currentAnswers[currentState.currentQuestionIndex] = clickedAnswerIndex;

        this.setState({
            userAnswerIndexes: currentAnswers,
        });
    };

    updateButtonsPos = () => {
        if (!this.questionsLoaded()) {
            return false;
        }

        if (this.state.step === 2) {
            let buttons = Array.from(
                document.getElementById('buttonsContainer').children
            );
            let mainContainer = document.getElementById('mainContainer');

            buttons.forEach((button) => {
                button.children[0].style.bottom = '0px';
            });

            const bottomPosition =
                mainContainer.clientHeight - mainContainer.scrollHeight + 20;

            buttons.forEach((button) => {
                button.children[0].style.bottom = bottomPosition + 'px';
            });
        }
    };

    updatePage = (questionIndex) => {
        this.lastTimeButtonClicked = new Date().getTime();
        document.getElementById('mainContainer').scrollTop = 0;
        this.setState({
            currentQuestionIndex: questionIndex,
        });
    };

    questionsLoaded = () => (this.state.questions !== null ? true : false);
    getCurrentQuestion = () =>
        this.state.questions[this.state.currentQuestionIndex].question;
    getCurrentAnswers = () =>
        this.state.questions[this.state.currentQuestionIndex].answers;
    isAnswerSelected = (answerIndex) =>
        this.state.questionsAnswers[this.state.currentQuestionIndex] ===
        answerIndex;
    shouldShowSubmit = () =>
        this.state.currentQuestionIndex === this.state.questions.length - 1 &&
        this.state.questionsAnswers[this.state.questions.length - 1] !== undefined;
    shouldShowNext = () =>
        this.state.currentQuestionIndex !== this.state.questions.length - 1 &&
        this.state.questionsAnswers[this.state.currentQuestionIndex] !== undefined;
    shouldShowPrev = () => false; // this.state.currentQuestionIndex !== 0;
    areButtonsAnimating = () => {
        const transitionTime = 600;
        const currentTime = new Date().getTime();

        return currentTime - transitionTime <= this.lastTimeButtonClicked;
    };

    getAllGrades = async (accessToken) => {
        let res;
        try {
            const response = await axios({
                method: 'get',
                url: 'http://localhost:8080/api/grade/subjectGrade/',
            });
            res = response.data;
        } catch (axiosErr) {
            res = axiosErr.response && axiosErr.response.data;
        }
        this.setState({grades: res.data});
    };

    postGrade = async () => {
        let res;
        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:8080/api/grade/subjectGrade/',
                data: {grade: this.state.result.correctAnswers},
            });
            res = response.data;
        } catch (axiosErr) {
            res = axiosErr.response && axiosErr.response.data;
        }
        this.setState({grades: res.data});
    };

    render() {
        const {classes} = this.props;
        return (
            <Paper id="mainContainer" className={classes.paper} elevation={2}>
                {this.state.step === 0 ? (
                    <>
                        <div className="text-center">Bienvenue sur le quizz bg</div>
                        <div className="">
                            <Link to={'/create-quizz'}>
                                <div
                                    className="quizz1"
                                >
                                    Create Quizz
                                </div>
                            </Link>
                        </div>
                        <div className="row quizz-list">
                            <div
                                className="quizz1"
                                onClick={() => this.setState({step: 2})}
                            >
                                1 er quizz
                            </div>
                        </div>
                        <div className="history">
                            {this.state.grades.map((el) =>
                                <div>1 er quizz {el.grade}/10</div>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <hr key={'horizontalLine'} width={'100%'}/>
                        {this.questionsLoaded() && this.state.result == null ? (
                            <div>
                                <div key={this.getCurrentQuestion()}>
                                    <QuestionParagraph
                                        question={this.getCurrentQuestion()}
                                        questionIndex={this.state.currentQuestionIndex + 1}
                                        questionsLength={this.state.questions.length}
                                    />

                                    <div className={classes.answerContainer}>
                                        {this.getCurrentAnswers().map((currentAnswer, index) => (
                                            <Answer
                                                answerIndex={index}
                                                key={this.getCurrentQuestion() + index}
                                                answer={currentAnswer}
                                                isSelected={this.isAnswerSelected(index)}
                                                onAnswerSelect={this.onAnswerSelected}
                                            />
                                        ))}
                                    </div>

                                    <div id="buttonsContainer">
                                        {this.shouldShowSubmit() ? (
                                            <Button
                                                variant="contained"
                                                className={classes.btnSubmit}
                                                onClick={this.onSubmitClick}
                                                color="primary"
                                            >
                                                Submit
                                            </Button>
                                        ) : null}

                                        {this.shouldShowNext() ? (
                                            <Button
                                                variant="contained"
                                                className={classes.btnNext}
                                                onClick={this.onNextClick}
                                                color="secondary"
                                            >
                                                Next
                                            </Button>
                                        ) : null}

                                        {this.shouldShowPrev() ? (
                                            <Button
                                                variant="contained"
                                                className={
                                                    this.shouldShowSubmit()
                                                        ? classes.btnPrevSubmit
                                                        : classes.btnPrev
                                                }
                                                onClick={this.onPrevClick}
                                                color="primary"
                                            >
                                                Prev
                                            </Button>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        ) : this.state.result !== null ? (
                            <Result
                                result={this.state.result}
                                tryAgainPressed={this.onTryAgainPressed}
                            />
                        ) : (
                            <CircularLoading key={'loadingCircle'}/>
                        )}
                    </>
                )}
            </Paper>
        );
    }
}

export default withStyles(styles)(App);
