import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './create-exercise.css';
import {Button, Link} from "@material-ui/core";

const CreateExercise = (props) => {
    const matieres = ['Français', 'Histoire', 'Science et vie de la terre'];
    const levels = ['Facile', 'Moyen'];
    const sousMatieres = ['Grammaire', 'Vocabulaire'];
    const types = [
        'CRÉER UN EXERCICE',
        'GÉNÉRER UN TEXTE A TROUS',
        'GÉNÉRER UN QCM',
        'GÉNÉRER UN RELIER LES MOTS',
        'GÉNÉRER UN CONTRE LA MONTRE',
    ];
    // props.matieres;
    // const level = props.level;
    // const sousMatieres = props.sousMatieres;
    const [type, setType] = useState('');
    let history = useHistory();
    const handleClick = () => {
        if (type === 'CRÉER UN EXERCICE') {
            history.push('/quizz');
        } else if (type === 'GÉNÉRER UN TEXTE A TROUS') {
            history.push('/text-trous');
        }
    };

    const goToListQuiz = () => history.push("/quiz-list")

    const onChange = (event) => {
        setType(event.target.value);
    };

    return (
        <div className="container">
            <div className="create-exercise">
                <div className="ligne1">
                    <select className="select" defaultValue={'MATIÈRE'}>
                        <option disabled>MATIÈRE</option>
                        {matieres &&
                        matieres.map((matiere, index) => (
                            <option key={index}>{matiere}</option>
                        ))}
                    </select>{' '}
                    <select className="select" defaultValue={'NIVEAU'}>
                        <option disabled>NIVEAU</option>
                        {levels &&
                        levels.map((level, index) => (
                            <option key={index}>{level}</option>
                        ))}
                    </select>
                </div>
                <div className="ligne1">
                    <select className="select" defaultValue={'SOUS MATIÈRE'}>
                        <option disabled>SOUS MATIÈRE</option>
                        {sousMatieres &&
                        sousMatieres.map((sousMatiere, index) => (
                            <option key={index}>{sousMatiere}</option>
                        ))}
                    </select>{' '}
                    <select
                        className="select"
                        defaultValue={'TYPE D’EXERCICES'}
                        onChange={onChange}
                    >
                        <option disabled>TYPE D’EXERCICES</option>
                        {types &&
                        types.map((type, index) => (
                            <option key={index} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", marginTop: "20px"}}>
                    <Button style={{
                        borderRadius: 3,
                        backgroundColor: "white",
                    }} variant={"contained"} onClick={goToListQuiz}>
                        Quiz Créés
                    </Button>
                    <Button style={{
                        borderRadius: 3,
                        backgroundColor: "white",
                    }} color={"white"} variant={"contained"} onClick={handleClick}>
                        VALIDER
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CreateExercise;
