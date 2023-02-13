import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Avatar, Button } from '@mui/material';

import { userRequest } from '../../redux/actions/user';
import NewsList from '../../components/NewsList/NewsList';
import { EDIT_BUTTON_TEXT, ADD_BUTTON_TEXT } from './constants';

import './UserPage.css';
import avatarStyles from './styles';

function UserPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userRequest(id));
  }, [dispatch]);

  const { name, email, posts } = useSelector((state) => state.user.data);
  const authUserId = useSelector((state) => state.auth.authUser.id);

  return (
    <div className="container user-page">
      <div className="user">
        {name && (
          <>
            <Avatar className="avatar" sx={avatarStyles}>
              {name[0].toUpperCase()}
            </Avatar>
            <h2 className="name">{name}</h2>
            <p className="email">{email}</p>
            <p className="amount">{posts.length}</p>
            <p className="description">Posts</p>
            { authUserId === Number(id) && (
              <>
                <Button
                  className="edit-button"
                  variant="outlined"
                >
                  {EDIT_BUTTON_TEXT}
                </Button>
                <Button
                  className="add-button"
                  variant="outlined"
                >
                  {ADD_BUTTON_TEXT}
                </Button>
              </>
            )}
          </>
        )}
      </div>
      {posts
        && (<NewsList news={posts} />
        )}
    </div>
  );
}

export default memo(UserPage);
