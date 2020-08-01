import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Trombinoscope.css';

const RedirectToProfile = (student) => {
  return (
    // need to change redirection to /profile/id_student
    <Redirect to="/home" />
  );
};

const Pictures = (props) => {
  const { data } = props;
  const { userId, path, username } = data;
  return (
    <div className="picture_container">
      <div
        className="picture"
        onClick={() => {
          RedirectToProfile(userId);
        }}
      >
        <img src={path} alt={username} />
      </div>
    </div>
  );
};

Pictures.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Pictures;
