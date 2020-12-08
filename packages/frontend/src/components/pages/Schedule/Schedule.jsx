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
          <h2 className="tittleOne">Cahier de texte</h2>
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