import React from "react";

import Radio from "@material-ui/core/Radio";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";

import styles from "./answer-style";
import theme from "../../styles/theme";

class Answer extends React.Component {
    onAnswerClick = e => {
        e.preventDefault();
        this.props.onAnswerSelect(this.props.answerIndex);
    };

    render() {
        const { classes } = this.props;

        return (
                <div className={classes.answer}>
                    <Radio
                        id={this.props.answerIndex.toString()}
                        color={"secondary"}
                        checked={this.props.isSelected}
                        onClick={this.onAnswerClick}
                    />
                    <Typography className={classes.answerTypography} component="p" onClick={this.onAnswerClick}>
                        {this.props.answer}
                    </Typography>
                </div>
        );
    }
}

export default withStyles(styles)(Answer);
