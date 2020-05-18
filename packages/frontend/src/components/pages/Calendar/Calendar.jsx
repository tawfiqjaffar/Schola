import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class myCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(date) {
    this.setState({ date });
  }

  render() {
    const { date } = this.state;
    return (
      <div>
        <Calendar onChange={this.onChange} value={date} />
      </div>
    );
  }
}
export default myCalendar;
