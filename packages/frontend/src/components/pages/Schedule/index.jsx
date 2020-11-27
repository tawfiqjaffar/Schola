import { useState, React } from 'react';
import Cookies from 'js-cookies';
// import Paper from '@material-ui/core/Paper';
import {
  // getScheduleWeek,
  getScheduleDay,
  // getAllSchedule,
  // postCreateSchedule,
  // updateSchedule,
  // deleteSchedule
} from '../../../api/methods/calendar'
// import { ViewState } from '@devexpress/dx-react-scheduler';
// import {
//   Scheduler,
//   DayView,
//   Appointments,
// } from '@devexpress/dx-react-scheduler-material-ui';

// const currentDate = '2018-11-01';
// const schedulerData = [
//   { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
//   { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
// ];

const Schedule = async (e) => {
  const [post, setPost] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  // e.preventDefault()
  const res = await getScheduleDay(Cookies.get("accessToken"))
  if (res === 200) {
    console.log(res);
    setPost(res.data);
  } else {
    console.log("error")
    setErrorMsg("Error: Schedule request Failed")
    // console.log({errorMsg})
  }
  return (
      <div>
        List of request
      </div>
  )
}

export default Schedule