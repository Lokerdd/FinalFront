import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import toggleModal from '../../redux/actions/modal';

import './Header.css';

function Header() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.user.name);

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
