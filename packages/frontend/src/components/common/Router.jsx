import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import PageNotFound from '../pages/PageNotFound';
import Login from '../pages/Login';
import Home from '../pages/HomePage/HomePage';
import NavigationBar from './NavigationBar';
import Quiz from '../pages/Exercices2/App';
import CreateQuizz from "../pages/Exercices2/createQuizQcm";
import QuizzMatchWord from "../pages/Exercices2/quizMatchWord";
import CreateExercise from "../pages/create-exercise/create-exercise";
import GenerateTexteTrous from "../pages/generateQuiz/generate-texte-trou";
import ListQuiz from "../pages/list-quiz/list-quiz";
import QuizResult from "../pages/list-quiz/quiz-result";
import QuizDetail from '../pages/Exercices2/QuizDetail';

const redirectToLogin = (Component) => {
    if (!sessionStorage.getItem('token')) return <Login />;
    return <Component />;
};

const Router = () => (
    <BrowserRouter>
        <NavigationBar />
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/quiz" exact component={CreateExercise} />
            <Route path="/quiz/create/qcm" component={CreateQuizz} />
            <Route path="/quiz/create/match-word" component={CreateQuizz} />
            {/* <Route path="/create-quizz" component={CreateQuizz}/> */}
            <Route path="/text-trous" component={GenerateTexteTrous} />
            <Route path="/quiz/:id" component={QuizDetail} />
            <Route path="/match-word" component={QuizzMatchWord} />
            <Route path="/quiz-list" component={ListQuiz} />
            <Route path="/quiz-result" component={QuizResult} />
            <Route path="/login" component={Login} />
            <Route path="/home" render={() => redirectToLogin(Home)} />
            <Route component={PageNotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;
