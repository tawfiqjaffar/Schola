import React, { useState } from 'react';
import './Calendar.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const Square = (props) => {
  const { value } = props;
  return (
    <div className="calendar-squale">
      <p className="para-squale">{value}</p>
    </div>
  );
};

function setBool(value) {
  if (value) return false;
  return true;
}

const CreateEvent = (props) => {
  const { value } = props;
  if (value) {
    console.log('oui');
    return (
      <div className="para-event" id="event">
        <p>CRÉER UN ÉVÉNEMENT</p>
        <input
          type="text"
          id="date-debut"
          name="date-debut"
          placeholder="Date du début:"
          className="input-style"
        />
        <br />
        <input
          type="text"
          id="date-fin"
          name="date-fin"
          placeholder="Date de fin:"
          className="input-style"
        />
        <br />
        <input
          type="text"
          id="event"
          name="event"
          placeholder="Événement:"
          className="input-style"
        />
        <br />
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description:"
          className="input-style"
        />
        <br />
        <button type="button" className="butt-valid butt-style">
          VALIDER
        </button>
      </div>
    );
  }
  return <></>;
};

const Calendar = () => {
  const [create, setCreate] = useState(false);
  const board = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div>
      <button type="button" className="butt-precedent butt-style">
        PRÉCÉDENT
      </button>
      <button
        type="button"
        className="butt-suivant butt-style"
        vtf="butt-style"
      >
        Suivant
      </button>
      <button
        type="button"
        className="butt-add butt-style"
        onClick={() => {
          setCreate(setBool(create));
        }}
      >
        <AddCircleOutlineIcon>Add</AddCircleOutlineIcon>
      </button>
      <CreateEvent value={create} />
      <div className="calendar-margin">
        <div className="boardrows">
          {board.map((value, index) => (
            <Square value={value} key={index} />
          ))}
        </div>
        <div className="boardrows">
          {board.map((value, index) => (
            <Square value={value + 7} key={index + 7} />
          ))}
        </div>
        <div className="boardrows">
          {board.map((value, index) => (
            <Square value={value + 7 * 2} key={index + 7 * 2} />
          ))}
        </div>
        <div className="boardrows">
          {board.map((value, index) => (
            <Square value={value + 7 * 3} key={index + 7 * 3} />
          ))}
        </div>
        <div className="boardrows">
          {board.map((value, index) => (
            <Square value={value + 7 * 4} key={index + 7 * 4} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
