import React, { useState, useEffect } from 'react';
import { getQuiz } from "../../../api/methods/quizz"
import QuizzMatchWord from './quizMatchWord';

const QuizDetail = (props) => {
    const id = props.match.params.id
    const [quiz, setQuiz] = useState(null)

    useEffect(() => {
        async function fetchMyAPI() {
            let response = await getQuiz(id)
            setQuiz(response.data[0])
        }

        id && fetchMyAPI()
    }, [])

    return (
        <div>
            {quiz &&
                <>
                    {quiz.type == "match-word" || quiz.question.type == "match-word" &&
                        <QuizzMatchWord quiz={quiz} />
                    }
                </>}
        </div>
    );
}

export default QuizDetail;
