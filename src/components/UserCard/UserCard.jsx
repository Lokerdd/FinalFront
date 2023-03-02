import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Avatar, Button } from '@mui/material';

import { EDIT_BUTTON_TEXT, ADD_BUTTON_TEXT } from './constants';
import toggleModal from '../../redux/actions/modal';
import { ADD_POST, EDIT_PROFILE } from '../UserPageForm/constants';

import avatarStyles from './styles';
import './UserCard.css';

function UserCard({
  name,
  email,
  isNowUserCard,
  avatar,
}) {
  const dispatch = useDispatch();

  const onButtonClick = useCallback((type) => {
    dispatch(toggleModal({
      isOpen: true,
      type,
    }));
  }, []);

  return (
    <div className="user">
      {name && (
        <>
          <Avatar
            className="avatar"
            sx={avatarStyles}
            src={avatar}
            alt={name[0].toUpperCase()}
          />
          <h2 className="name">{name}</h2>
          <p className="email">{email}</p>
          {isNowUserCard && (
            <div className="buttons">
              <Button
                className="edit-button"
                variant="outlined"
                onClick={() => onButtonClick(EDIT_PROFILE)}
              >
                {EDIT_BUTTON_TEXT}
              </Button>
              <Button
                className="add-button"
                variant="outlined"
                onClick={() => onButtonClick(ADD_POST)}
              >
                {ADD_BUTTON_TEXT}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  isNowUserCard: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
};
UserCard.defaultProps = {
  avatar: '',
};

export default memo(UserCard);
