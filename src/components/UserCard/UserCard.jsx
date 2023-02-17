import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Avatar, Button } from '@mui/material';

import { EDIT_BUTTON_TEXT, ADD_BUTTON_TEXT } from './constants';
import toggleModal from '../../redux/actions/modal';

import avatarStyles from './styles';
import './UserCard.css';

function UserCard({
  name,
  email,
  postsAmount,
  isNowUserCard,
}) {
  const dispatch = useDispatch();

  const onButtonClick = (type) => {
    dispatch(toggleModal({
      isOpen: true,
      type,
    }));
  };

  return (
    <div className="user">
      {name && (
        <>
          <Avatar className="avatar" sx={avatarStyles}>
            {name[0].toUpperCase()}
          </Avatar>
          <h2 className="name">{name}</h2>
          <p className="email">{email}</p>
          <p className="amount">{postsAmount}</p>
          <p className="description">Posts</p>
          {isNowUserCard && (
            <div className="buttons">
              <Button
                className="edit-button"
                variant="outlined"
              >
                {EDIT_BUTTON_TEXT}
              </Button>
              <Button
                className="add-button"
                variant="outlined"
                onClick={() => onButtonClick('Add Post')}
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
  postsAmount: PropTypes.number.isRequired,
  isNowUserCard: PropTypes.bool.isRequired,
};

export default memo(UserCard);
