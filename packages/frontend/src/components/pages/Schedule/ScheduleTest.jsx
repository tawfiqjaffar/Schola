import React, { useState, useEffect } from 'react';
import "./Schedule.css"
import Cookies from 'js-cookie';
import {
  getWeekTask,
  getDayTask,
  getAllTask,
  postCreateTask,
  updateTask,
  updateTaskDate,
  deleteTask
} from '../../../api/methods/calendar';

const Main = () => {
  const [post, setPost] = useState({});
    useEffect(async () => {
        var result = await getWeekTask(Cookies.get('accessToken'))
        setPost(result.data[0]);
    }, []);

    return (
      <div>

        <div className="backBook">
        <h1 className="tittleOne">Cahier de texte</h1>
        <div className="WeekDay">
          <h1>WeekDay</h1>
          {/* <h2>{currentWeekDay("1")}</h2> */}
          <p>Pas de texte.</p>
          {/* <p>{post.label}</p> */}
          <h2>Mardi 13 janvier</h2>
          <p>exemple de texte.</p>
          <h2>Mercredi 14 decembre</h2>
          <p>A faire: Preparer le rendez-vous EIP.</p>
          <h2>Jeudi 15 janvier</h2>
          <p>Pas de texte.</p>
          <h2>Vendredi 16 janvier</h2>
          <p>Pas de texte.</p>
        </div>
        <div className="DayDescription">
          <h1>DayDescription</h1>
          <h2>mardi 13 janvier</h2>
          <p>test</p> 
          <button>precedent</button>
          <div className="spaceDiv"/> 
          <button>suivant</button>
        </div>          
        <div className="footer">
          By Schola.
        </div>
        </div>
      </div>
    )
}

export default Main;