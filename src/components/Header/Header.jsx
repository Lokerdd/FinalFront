import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';

import toggleModal from '../../redux/actions/modal';

import './Header.css';

function Header() {
  const dispatch = useDispatch();

  const onButtonClick = (type) => {
    dispatch(toggleModal({
      isOpen: true,
      type,
    }));
  };

  return (
    <header className="header">
      <h1 className="site-name">News</h1>
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
    </header>
  );
}

export default memo(Header);
