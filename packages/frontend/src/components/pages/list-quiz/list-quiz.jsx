import React, {useState} from 'react'
import {Button, Container, Grid, TextField} from "@material-ui/core";
import {useHistory} from "react-router-dom";


const ListQuiz = () => {

    const [i, setIndex] = useState(0);
    const [quizs, setQuizs] = useState(JSON.parse(localStorage.getItem("generateQuiz")))
    const [result, setResult] = useState([])
    const history = useHistory();


    const goToNextPage = () => {
        setIndex(i + 1);
    }
    const goToPreviousPage = () => {
        setIndex(i - 1);
    }

    const setValue = (v, answer) => {
        let newArr = [...quizs];
        newArr[i].answer = newArr[i].answer.map(el => el.label === answer.label ? {...el, send: v} : el);
        setQuizs(newArr);
    }

    const confirmQuiz = () => {
        let newArr = []
        quizs.filter(z => z.answer).forEach(answer =>
            answer.answer.filter(a => a.valid).forEach(el => {
                newArr.push(el)
            })
        )

        setResult(newArr);

        localStorage.setItem("results", JSON.stringify(newArr))
        history.push("/quiz-result")
    }

    return (
        <Container style={{padding: '10px'}} className={"quiz-list"}>
            {quizs && <>
                <Grid container className="listQuizName">
                    <h3>{quizs[quizs.length - 1]}</h3>
                </Grid>
                <Grid container style={{marginTop: "20px"}} spacing={3}>
                    {quizs[i].answer.map(p => (<Grid item>
                        {p.valid ?<>
                            <TextField fullWidth={true} onChange={(e) => setValue(e.target.value, p)}
                                       value={p.send ? p.send : ""}
                                       placeholder={"entrez"}
                                       required={true}/><div className="text-center-indice">{p.indice}</div></> :
                            <div>{p.label}</div>}
                    </Grid>))}

                </Grid>
                <Grid container className="quiz-list-action">
                    <Grid item>
                        {i != 0 && <Button style={{
                            borderRadius: 3,
                            backgroundColor: "white",
                        }} size={"small"} color={"white"} variant={"contained"} onClick={goToPreviousPage}>
                            Page Precèdente
                        </Button>}
                    </Grid>
                    <Grid item>
                        {quizs[i + 1].answer ? <Button style={{
                                borderRadius: 3,
                                backgroundColor: "white",
                            }} color={"white"} size={"small"} variant={"contained"} onClick={goToNextPage}>
                                Page Suivante
                            </Button> :
                            <Button style={{
                                borderRadius: 3,
                                backgroundColor: "white",
                            }} color={"white"} size={"small"} variant={"contained"} onClick={confirmQuiz}>
                                Envoyez
                            </Button>}
                    </Grid>
                </Grid>
            </>}
        </Container>
    )
}

export default ListQuiz;