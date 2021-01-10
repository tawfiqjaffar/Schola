import React, { useRef, useState } from 'react';
import Xarrow from "react-xarrows";
import Paper from '@material-ui/core/Paper';
import "./createQuizMatchWord.css";

const QuizzMatchWord = ({ quiz }) => {
    const [answer, setAnswer] = useState([])

    const handleCurrent = (val, index) => {
        let newCurrent = [...answer];
        newCurrent[index] = val;
        setAnswer(newCurrent);
    }

    return (
        <Paper id="mainContainer" className={'quizzForm'} elevation={2}>
            Creation de quizz
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "100px" }}>
                <div id={"question1"} className={"selected"} style={{ padding: "20px" }} onClick={() => handleCurrent("question1", 0)}>
                    {quiz.question.question1.label}
                </div>
                <div>
                    {Object.keys(quiz.question.question1).map((answer) =>
                        answer == "label" || answer == "correct" ? (<></>) : (<div id={quiz.question.question1[answer]} style={{ padding: "20px" }} onClick={() => handleCurrent(quiz.question.question1[answer], 1)}>
                            {quiz.question.question1[answer]}
                        </div>)
                    )}
                </div>
                {console.log(answer)}
                {answer.length > 1 &&
                    <Xarrow
                        start={"question1"}
                        end={answer[1] ? answer[1] : "none"}
                    />}
            </div>
            <div>
            </div>
        </Paper >
    );
};

export default QuizzMatchWord;
