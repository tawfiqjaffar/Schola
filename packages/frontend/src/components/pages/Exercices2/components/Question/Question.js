import React from "react";

import addCssTransition from "../../utils/css-transition";
import { withStyles } from "@material-ui/core/styles";

import questionStyle from "./question-style";
import theme from "../../styles/theme";

class QuestionParagraph extends React.Component {
    render() {
        const { classes } = this.props;

        return (
                    <div>
                        <div className={classes.questionNumber}>
                            {`Question ${this.props.questionIndex}/${this.props.questionsLength}:`}{" "}
                        </div>
                        <pre className={classes.questionParagraph}>{this.props.question}</pre>
                    </div>
        )
    }
}

export default withStyles(questionStyle)(QuestionParagraph);
