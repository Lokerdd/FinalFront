import React, { memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';

import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import Search from '../Search';
import Filter from '../Filter';
import { verifyRequest } from '../../redux/actions/auth';
import toggleModal from '../../redux/actions/modal';
import { LOG_IN, SIGN_UP, LOGOUT } from './constants';

import './Header.css';
import logoutButtonStyles from './styles';

function Header() {
  const {
    authUser: {
      name,
      id,
      avatar,
    },
    isLoggedIn,
  } = useSelector((state) => state.auth);

  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    const token = searchParams.get('token');

    if (token) localStorage.setItem('token', token);
    if (!localStorage.getItem('token')) return;

    dispatch(verifyRequest());
  }, [dispatch]);

  const onButtonClick = useCallback((type) => {
    dispatch(toggleModal({
      isOpen: true,
      type,
    }));
  }, []);

  return (
    <header className="header">
      <Link to="/" className="site-name">News</Link>
      <div>
        <Search />
        <Filter />
      </div>
      {isLoggedIn && (
        <div className="account">
          <span>{`Hello, ${name}!`}</span>
          <Link to={`users/${id}`}>
            <Avatar src={avatar} alt={name[0].toUpperCase()} />
          </Link>
          <Button
            sx={logoutButtonStyles}
            onClick={() => onButtonClick('Logout')}
          >
            {LOGOUT}
          </Button>
        </div>
      )}
      {!isLoggedIn && (
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
