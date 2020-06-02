import React, { Component } from 'react';
import moment from 'moment';
import { ReactAgenda, guid } from 'react-agenda';

var now = new Date();

require('moment/locale/fr.js');
var colors = {
  'color-1': 'rgba(102, 195, 131 , 1)',
  'color-2': 'rgba(242, 177, 52, 1)',
  'color-3': 'rgba(235, 85, 59, 1)',
  'color-4': 'rgba(70, 159, 213, 1)',
  'color-5': 'rgba(170, 59, 123, 1)',
  'color-green': '#199839',
  'color-lightgreen': '#1CD24A',
  'color-white': '#FFF',
  'color-red': '#F22F2F',
  'color-lightred': '#F87171',
  'color-brown': '#9C6806',
  'color-blue': '#486AF3',
  'color-lightblue': '#7F96EF',
  'color-yellow': '#EDF871',
  'color-yellow2': '#DBEE06',
  'color-purple': '#B006EE',
  'color-lightpurple': '#C744F7',
};

export default class Schedulecomp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: [],
      cellHeight: 100 / 4,
      showModal: false,
      locale: 'fr',
      rowsPerHour: 2,
      numberOfDays: 7,
      startDate: new Date(),
      items: [
        {
          _id: guid(),
          name: 'Mathematiques',
          startDateTime: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            10,
            0
          ),
          endDateTime: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            12,
            0
          ),
          classes: 'color-lightred color-red',
        },
        {
          _id: guid(),
          name: 'SVT',
          startDateTime: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            14,
            0
          ),
          endDateTime: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            15,
            0
          ),
          classes: 'color-lightgreen color-green',
        },
        {
          _id: guid(),
          name: 'EPS',
          startDateTime: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            15,
            0
          ),
          endDateTime: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            17,
            0
          ),
          classes: 'color-2 color-brown',
        },
        {
          _id: guid(),
          name: 'Mathematiques',
          startDateTime: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 3,
            10,
            0
          ),
          endDateTime: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 3,
            12,
            0
          ),
          classes: 'color-lightred color-red',
        },
        {
          _id: guid(),
          name: 'Francais',
          startDateTime: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 3,
            14,
            0
          ),
          endDateTime: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 3,
            16,
            0
          ),
          classes: 'color-lightblue color-blue',
        },
        {
          _id: guid(),
          name: 'Francais',
          startDateTime: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 4,
            9,
            0
          ),
          endDateTime: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 4,
            11,
            0
          ),
          classes: 'color-lightblue color-blue',
        },
        {
          _id: guid(),
          name: 'Physique/Chimie',
          startDateTime: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 4,
            14,
            0
          ),
          endDateTime: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 4,
            16,
            0
          ),
          classes: 'color-lightpurple color-purple',
        },
        {
          _id: guid(),
          name: 'Anglais',
          startDateTime: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 4,
            16,
            10
          ),
          endDateTime: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 4,
            18,
            10
          ),
          classes: 'color-yellow2 color-yellow',
        },
        {
          _id: guid(),
          name: 'Mathematiques',
          startDateTime: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 5,
            10,
            0
          ),
          endDateTime: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 5,
            12,
            0
          ),
          classes: 'color-lightred color-red',
        },
        {
          _id: guid(),
          name: 'SVT',
          startDateTime: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 5,
            9,
            0
          ),
          endDateTime: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 5,
            10,
            0
          ),
          classes: 'color-lightgreen color-green',
        },
        {
          _id: guid(),
          name: 'EPS',
          startDateTime: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 5,
            14,
            0
          ),
          endDateTime: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 5,
            17,
            0
          ),
          classes: 'color-2 color-brown',
        },
        {
          _id: guid(),
          name: 'Francais',
          startDateTime: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 6,
            9,
            0
          ),
          endDateTime: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 6,
            11,
            0
          ),
          classes: 'color-lightblue color-blue',
        },
        {
          _id: guid(),
          name: 'Physique/Chimie',
          startDateTime: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 6,
            14,
            0
          ),
          endDateTime: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 6,
            16,
            0
          ),
          classes: 'color-lightpurple color-purple',
        },
      ],
    };
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  zoomIn() {
    var num = this.state.cellHeight + 15;
    this.setState({ cellHeight: num });
  }
  zoomOut() {
    var num = this.state.cellHeight - 15;
    this.setState({ cellHeight: num });
  }

  handleDateRangeChange(startDate, endDate) {
    this.setState({ startDate: startDate });
  }
  changeView(days, event) {
    this.setState({ numberOfDays: days });
  }

  render() {
    var AgendaItem = function (props) {
      return (
        <div
          style={{ display: 'block', position: 'absolute', background: '#FFF' }}
        >
          {props.item.name}{' '}
          <button onClick={() => props.edit(props.item)}>Edit </button>
        </div>
      );
    };
    return (
      <div
        style={{
          paddingLeft: '200px',
          paddingTop: '100px',
          color: 'black',
          height: '100%',
        }}
      >
        <div className="content-expanded ">
          <div
            className="control-buttons"
            style={{
              padding: 20,
            }}
          >
            <button className="button-control" onClick={this.zoomIn}>
              +
            </button>
            <button className="button-control" onClick={this.zoomOut}>
              -
            </button>
            <button
              className="button-control"
              onClick={this.changeView.bind(null, 7)}
            >
              {' '}
              {moment.duration(7, 'day').humanize()}{' '}
            </button>
            <button
              className="button-control"
              onClick={this.changeView.bind(null, 1)}
            >
              {' '}
              {moment.duration(1, 'day').humanize()}{' '}
            </button>
          </div>

          <ReactAgenda
            minDate={new Date(now.getFullYear(), now.getMonth() - 3)}
            maxDate={new Date(now.getFullYear(), now.getMonth() + 3)}
            startDate={this.state.startDate}
            startAtTime={8}
            endAtTime={21}
            cellHeight={this.state.cellHeight}
            locale="fr"
            items={this.state.items}
            numberOfDays={this.state.numberOfDays}
            headFormat={'ddd DD MMM'}
            rowsPerHour={this.state.rowsPerHour}
            itemColors={colors}
            helper={true}
            view="Schedule"
            autoScale={false}
            fixedHeader={true}
          />
          {}
        </div>
      </div>
    );
  }
}
