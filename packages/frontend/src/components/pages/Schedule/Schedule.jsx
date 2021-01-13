import React, { useState, useEffect } from 'react';
import "./Schedule.css"
import Cookies from 'js-cookie';
// import Book from './iconfinder_Book.svg'
// import Paper from '@material-ui/core/Paper';
import {
  // getWeekTask,
  getDayTask,
  // getAllTask,
  // postCreateTask,
  // updateTask,
  // updateTaskDate,
  // deleteTask
} from '../../../api/methods/calendar'

var Tday = new Date();
var Today = Tday.getDay();
var Gday = Today === 0 ? 6 : Today - 1;
var GMon = new Date(new Date(Tday).setDate(Tday.getDate() - Gday)) + '';
var tmp = GMon.split(' ');
var GMonday = tmp[2];

const currentWeekDay = (day) => {
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };
  
  var dt = new Date(); // current date of week
  var currentWeekDay = dt.getDay();
  var lessDays = currentWeekDay === 0 ? 6 : currentWeekDay - 1;

  var Lundi = new Date(new Date(dt).setDate(dt.getDate() - lessDays));
  var Mardi = new Date(new Date(Lundi).setDate(Lundi.getDate() + 1));
  var Mercredi = new Date(new Date(Lundi).setDate(Lundi.getDate() + 2));
  var Jeudi = new Date(new Date(Lundi).setDate(Lundi.getDate() + 3));
  var Vendredi = new Date(new Date(Lundi).setDate(Lundi.getDate() + 4));

  var Lundicaps = Lundi.toLocaleDateString('fr-FR', options);
  var Mardicaps = Mardi.toLocaleDateString('fr-FR', options);
  var Mercredicaps = Mercredi.toLocaleDateString('fr-FR', options);
  var Jeudicaps = Jeudi.toLocaleDateString('fr-FR', options);
  var Vendredicaps = Vendredi.toLocaleDateString('fr-FR', options);

  switch (day) {
    case 1:
      return Lundicaps;
    case 2:
      return Mardicaps;
    case 3:
      return Mercredicaps;
    case 4:
      return Jeudicaps;
    case 5:
      return Vendredicaps;
    default:
      return null;
  }
}    

const Main = () => {
  const [post, setPost] = useState([]);
  // const [currentDay, setCurrentDay] = useState();
    useEffect(async () => {
      var result = await getDayTask(Cookies.get('accessToken'))
      setPost(result.data)//setPost(result.data[0]);
    }, []);
      // console.log(tmp)
      var Label = [];
      // console.log(post.label)
      if (post[0] !== undefined) {
        Label.push(post[0].label)
        console.log(post.label)
      }
      Label.push(" ")
      if (post[1] !== undefined) {
        Label.push(post[1].label)
        console.log(post.label)
      }
      Label.push(" ")
      if (post[2] !== undefined) {
        Label.push(post[2].label)
        console.log(post.label)
      }
      Label.push(" ")
    var now = Today;
    return (
      <div>
        <div className="backBook">
        <h1 className="tittleOne">Cahier de texte</h1>
        <div className="WeekDay">
          <h1>WeekDay</h1>
          <h2>{currentWeekDay(1)}</h2>
          <p>Rien a faire</p>
          <h2>{currentWeekDay(2)}</h2>
          <p>Rien a faire</p>
          <h2>{currentWeekDay(3)}</h2>
          <p>Rien a faire</p>
          <h2>{currentWeekDay(4)}</h2>
          <p>Rien a faire</p>
          <h2>{currentWeekDay(5)}</h2>
          <p>Rien a faire</p>
        </div>
        <div className="DayDescription">
          <h1>DayDescription</h1>
          <h2>{currentWeekDay(now)}</h2>
          <p>{Label}</p> 
          <button onclick={() => now--}>precedent</button>
          <div className="spaceDiv"/> 
          <button onclick={() => now++} >suivant</button>
        </div>          
        <div className="footer">
          By Schola.
        </div>
        </div>
      </div>
    )
}

export default Main;