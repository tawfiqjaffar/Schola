import React, {useState} from 'react'
import {Button, Container, Grid, TextField} from "@material-ui/core";
import {Link, useHistory} from "react-router-dom";


const QuizResult = () => {
    const result = JSON.parse(localStorage.getItem("results"))
    console.log(JSON.parse(localStorage.getItem("results")))
    return (
        <Container style={{padding: '10px'}} className={"quiz-list"}>
            <Grid container>
                <Grid item xs={12} className="text-center-result-title">Score</Grid>
                <Grid container item xs={12} className="text-center-result">
                    <Grid item xs={6} className="text-center-result-bold">
                        Reponse attendu :
                    </Grid>
                    <Grid item xs={6} className="text-center-result-bold">
                        Réponse de l'élève :
                    </Grid>
                </Grid>
                <Grid item container xs={12} className="text-center-result">
                    {result.map(r => <>
                        <Grid item xs={6} className="text-center-result">
                            <div>{r.label}</div>
                        </Grid>
                        <Grid item xs={6} className="text-center-result">
                            <div>{r.send}</div>
                        </Grid>

                    </>)}
                </Grid>
                <Grid container item className="text-center-result">
                    <div className="text-center-result-bold" style={{width: '100%'}}>
                        Note
                        : {result.map(r => r.label == r.send ? 1 : 0).reduce((total, amount) => total + amount)} / {result.length}
                    </div>
                </Grid>

                <Grid container item className="text-center-result" style={{display:"flex", justifyContent:"space-between"}}>
                    <Link to={"/quiz-list"} style={{textDecoration:"none"}}>
                        <Button variant={"contained"} className="text-center-result-bold" style={{width: '100%'}}>
                            Refaire le quiz
                        </Button>
                    </Link>
                    <Link to={"/quiz"} style={{textDecoration:"none"}}>
                        <Button variant={"contained"} className="text-center-result-bold" style={{width: '100%'}}>
                            Aller au menu
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    )
}

export default QuizResult;