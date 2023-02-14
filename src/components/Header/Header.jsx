import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import { verifyRequest } from '../../redux/actions/auth';
import toggleModal from '../../redux/actions/modal';
import { LOG_IN, SIGN_UP, LOGOUT } from './constants';

import './Header.css';
import logoutButtonStyles from './styles';

function Header() {
  const username = useSelector((state) => state.auth.authUser.name);

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('token')) dispatch(verifyRequest());
  }, [dispatch]);

  const onButtonClick = (type) => {
    dispatch(toggleModal({
      isOpen: true,
      type,
    }));
  };

  return (
    <header className="header">
      <Link to="/" className="site-name">News</Link>
      {username && (
        <div className="account">
          <span>{`Hello, ${username}!`}</span>
          <Avatar>{username[0].toUpperCase()}</Avatar>
          <Button
            sx={logoutButtonStyles}
            onClick={() => onButtonClick('Logout')}
          >
            {LOGOUT}
          </Button>
        </div>
      )}
      {!username && (
        <div className="account">
          <Button
            variant="outlined"
            onClick={() => onButtonClick('Sign Up')}
          >
            {SIGN_UP}
          </Button>
          <Button
            variant="outlined"
            onClick={() => onButtonClick('Log In')}
          >
            {LOG_IN}
          </Button>
        </div>
      )}
    </header>
  );
}

export default memo(Header);
