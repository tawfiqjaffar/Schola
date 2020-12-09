import React, { useState } from 'react';
import "./Schedule.css"
// import Cookies from 'js-cookies';
// import Book from './iconfinder_Book.svg'
// import Paper from '@material-ui/core/Paper';
import {
  // getScheduleWeek,
  // getScheduleDay,
  getAllSchedule,
  // postCreateSchedule,
  // updateSchedule,
  // deleteSchedule
} from '../../../api/methods/calendar'

const state = {
  post: [],
  title: '',
  body: ''
};

const Schedule = async (e) => {
  const [post , setPost] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const res = 200;
  // const res = await getAllSchedule(Cookies.get("accessToken"))
  if (res === 200) {
    console.log(res);
    setPost(res.data);
  } else {
    console.log("error")
    setErrorMsg("Error: Schedule request Failed")
    console.log({errorMsg})
  }
}

const DisplayPost = (posts) => {

  if (!posts.length) return null;

  return posts.map((post, index) => (
    <div key={index}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ));
}

const main = () => {
  // state.post = Schedule()
    return (
        <div className="backBook">
          <h1 className="tittleOne">Cahier de texte</h1>
          <div className="WeekDay">
            <h1>WeekDay</h1>
            <h2>Lundi 7 decembre</h2>
            <p>Pas de texte.</p>
            <h2>Mardi 8 decembre</h2>
            <p>exemple de texte.</p>
            <h2>Mercredi 9 decembre</h2>
            <p>A faire: Preparer le rendez-vous EIP.</p>
            <h2>Jeudi 10 decembre</h2>
            <p>Pas de texte.</p>
            <h2>Vendredi 11 decembre</h2>
            <p>Pas de texte.</p>
          </div>
          <div className="DayDescription">
            <h1>DayDescription</h1>
            <h2>Mercredi 9 decembre</h2>
            <p>Preparer sa presentation pour l'EIP.</p>
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