import React, { useState } from 'react'
import { Button, Container, Grid, TextField } from "@material-ui/core";

const GenerateTexteTrous = () => {

    const [quiz, setQuiz] = useState([])
    const [quizName, setQuizName] = useState("")

    const handlequizNameChange = (v) => {
        setQuizName(v)
    }

    const handleAnswerChange = (i, t, v) => {
        let newArr = [...quiz];
        newArr[i]["answer"][t].label = v;

        setQuiz(newArr)
    }

    const handleAnswerIndiceChange = (i, t, v) => {
        let newArr = [...quiz];
        newArr[i]["answer"][t].indice = v;

        setQuiz(newArr)
    }

    const addAnswer = (i) => {
        let newArr = [...quiz];
        newArr[i]["answer"][newArr[i].answer.length] = { "label": "" }
        newArr[i]["answer"][newArr[i].answer.length] = { "label": "", valid: true };
        newArr[i]["answer"][newArr[i].answer.length] = { "label": "" };

        setQuiz(newArr)
    }

    const removeAnswer = (i) => {
        let newArr = [...quiz];

        newArr[i]["answer"].splice(0, 3);
        setQuiz(newArr)
    }

    const submitQuiz = () => {
        localStorage.setItem("generateQuiz", JSON.stringify([...quiz, quizName, { type: "trou" }]))
    }

    return (
        <Container style={{ padding: '10px' }}>
            <h1 style={{ textAlign: 'center' }}>
                Quizz :
            </h1>
            <br />
            <br />
            <br />
            <TextField placeholder={"Nom du quiz"} value={quiz.quizName}
                onChange={(e) => handlequizNameChange(e.target.value)} />
            <br />
            <br />
            <br />
            <br />
            <br />
            {quiz.map((q, i) => (
                <>
                    <Grid container spacing={2}>
                        <Grid container item style={{ display: 'flex', justifyContent: "center" }}>
                            <h4 style={{ textDecorationLine: 'underline' }}>Page n°{i + 1}</h4>
                            <Button style={{ fontSize: '28px', marginLeft: "10px" }}
                                onClick={() => addAnswer(i)}>+</Button>
                            {q.answer.length != 0 &&
                                <Button style={{ fontSize: '28px' }} onClick={() => removeAnswer(i)}>-</Button>}
                        </Grid>
                        <br />
                        <br />
                        <Grid item container spacing={3}>
                            {q.answer.map((a, t) => (
                                <>
                                    <Grid item md={4}>
                                        <div style={{ height: '63px' }}>
                                            {a.valid &&
                                                <TextField fullWidth={true} size={"small"} variant={"filled"} placeholder={"indice"}
                                                    type="text"
                                                    onChange={(e) => handleAnswerIndiceChange(i, t, e.target.value)} />}
                                        </div>
                                        <TextField fullWidth={true} placeholder={a.valid ? `Reponse` : `Text`}
                                            variant={"filled"}
                                            value={a.label}
                                            onChange={(e) => handleAnswerChange(i, t, e.target.value)} />
                                    </Grid>
                                </>
                            ))}
                        </Grid>
                    </Grid>
                    <br />
                    <br />
                    <br />

                </>
            ))}
            <Button variant={"contained"} onClick={() => setQuiz([...quiz, { answer: [] }])}>Ajouter Une
                Phrase</Button>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div style={{ display: 'flex', justifyContent: "flex-end" }}>
                <Button variant={"contained"} onClick={() => submitQuiz()}>Valider</Button>
            </div>
        </Container>
    )
}

export default GenerateTexteTrous;