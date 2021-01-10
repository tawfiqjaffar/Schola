import React, { useState } from 'react';
import "./Schedule.css"
import Cookies from 'js-cookie';
// import Book from './iconfinder_Book.svg'
// import Paper from '@material-ui/core/Paper';
import {
  getWeekTask,
  getDayTask,
  getAllTask,
  postCreateTask,
  updateTask,
  updateTaskDate,
  deleteTask
} from '../../../api/methods/calendar'

const state = {
  post: [],
  title: '',
  body: ''
};

const Task = async (e) => {
  const [post , setPost] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  // const res = 200;
  const res = await getWeekTask(Cookies.get('accessToken'))
  console.log(res)
  // const res = await getAllSchedule(Cookies.get("accessToken"))
  if (res.code === 200) {
    setPost(res.data);
  } else {
    setErrorMsg("Error: Schedule request Failed")
  }
}

const dayName = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
const monthName = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

const currentWeekDay = (day) => {
  var date = new Date();
  var currentDay = date.getDay();
  var number = date.getDate();
  var month = date.getMonth();
  var diff = 0;
  var monthDiff = 0;

  // for (i = date.getDay() ; i != day; diff++) {
  //   if (month = 0,2,4,6,8,10)
  // };
  var res = dayName[currentDay + diff] + " " + (number + diff);
}


// const DisplayPost = (posts) => {

//   if (!posts.length) return null;

//   return posts.map((post, index) => (
//     <div key={index}>
//       <h3>{post.title}</h3>
//       <p>{post.body}</p>
//     </div>
//   ));
// }

const main = () => {
  state.post = Task()
  console.log('State = ' + state.post.data)
    return (
        <div className="backBook">
          <h1 className="tittleOne">Cahier de texte</h1>
          <div className="WeekDay">
            <h1>WeekDay</h1>
            <h2>{currentWeekDay("1")}</h2>
            <p>Pas de texte.</p>
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
    {/* <div>{DisplayPost(state.post)}</div> */}
        </div>
    )
}
  // return (
  //   <div>
  //     This is a post
  //   </div>
  // )
// }

export default main;