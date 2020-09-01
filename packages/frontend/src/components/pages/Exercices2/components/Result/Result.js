import React from "react";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import addCssTransition from "../../utils/css-transition";
import questionStyle from "./result-style";
import theme from "../../styles/theme";

import successSvg from "../../../../../assets/success.svg";
import failureSvg from "../../../../../assets/failure.svg";

class Result extends React.Component {
    getSuccessMessage = () => {
        return `Passed!\n ${this.props.result.correctAnswers} / ${this.props.result.questionsLength} correct`;
    };

    getFailMessage = () => {
        return `Fail!\n ${this.props.result.correctAnswers} / ${this.props.result.questionsLength} correct`;
    };

    render() {
        const { classes } = this.props;
        console.log(this.props);
        return (
            <div className={classes.svgContainer}>
                <img
                    src={this.props.result.pass ? successSvg : failureSvg}
                    className={classes.resultSVG}
                    alt="logo"
                />
                <pre className={classes.resultParagraph}>ß
                            {this.props.result.pass ? this.getSuccessMessage() : this.getFailMessage()}
                </pre>

                <Button
                    variant="contained"
                    className={classes.resetButton}
                    onClick={this.props.tryAgainPressed}
                    color="secondary"
                >
                    Try Again
                        </Button>

                <Button
                    variant="contained"
                    className={classes.resetButton}
                    onClick={()=> document.location.reload(true)}
                    color="secondary">
                    Home
                        </Button>
            </div>
        );
    }
}

export default withStyles(questionStyle)(Result);
