import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { red } from '@mui/material/colors';

import { verifyRequest } from '../../redux/actions/auth';
import toggleModal from '../../redux/actions/modal';

import './Header.css';

function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('token')) dispatch(verifyRequest());
  }, [dispatch]);
  const username = useSelector((state) => state.auth.authUser.name);

  const onButtonClick = (type) => {
    dispatch(toggleModal({
      isOpen: true,
      type,
    }));
  };

  return (
    <header className="header">
      <h1 className="site-name">News</h1>
      {username
        ? (
          <div className="account">
            <span>{`Hello, ${username}!`}</span>
            <Avatar>{username[0].toUpperCase()}</Avatar>
            <IconButton
              sx={{ color: red[500] }}
              onClick={() => onButtonClick('Logout')}
            >
              <CloseIcon />
            </IconButton>
          </div>
        )
        : (
          <div className="account">
            <Button
              variant="outlined"
              onClick={() => onButtonClick('Sign Up')}
            >
              Sign Up
            </Button>
            <Button
              variant="outlined"
              onClick={() => onButtonClick('Log In')}
            >
              Log In
            </Button>
          </div>
        )}
    </header>
  );
}

export default memo(Header);
