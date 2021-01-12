import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import { getMe } from '../../api/methods/user';
import { logIn, logOut, setUser } from '../../redux/actions/UserActions';

const Protected = (props) => {
  const isLogged = useSelector((state) => state.isLogged);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [comps, setComps] = useState(<h3>Redirecting</h3>);

  useEffect(() => {
    const getMyInfo = async () => {
      const res = await getMe(Cookies.get('accessToken'));
      if (res.data !== null) {
        dispatch(setUser(res.data));
        dispatch(logIn());
        setComps(props.children);
      }
    };
    if (!Cookies.get('accessToken')) {
      dispatch(logOut());
      dispatch(setUser(null));
      setComps(<Redirect to="/login" />);
    } else if (isLogged && user) {
      setComps(props.children);
    } else {
      getMyInfo();
    }
  }, []);
  return <>{comps}</>;
};

Protected.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Protected;
