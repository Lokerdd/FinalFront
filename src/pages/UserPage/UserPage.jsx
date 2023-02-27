import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';

import { userRequest } from '../../redux/actions/user';
import NewsList from '../../components/NewsList';
import UserCard from '../../components/UserCard';
import CustomAlert from '../../components/CustomAlert';
import NO_NEWS_MESSAGE from './constants';
import { changeFilter, changeSearchText } from '../../redux/actions/news';

import circularProgressStyles from './styles';
import './UserPage.css';

function UserPage() {
  const { name, email, avatar } = useSelector((state) => state.user.user);
  const posts = useSelector((state) => state.user.userPosts);
  const isLoading = useSelector((state) => state.user.isLoading);
  const authUserId = useSelector((state) => state.auth.authUser.id);
  const { searchText, currentFilter, page } = useSelector((state) => state.news);

  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    if (id) dispatch(userRequest(id));
  }, [
    id,
    searchText,
    currentFilter,
    page,
  ]);
  useEffect(() => {
    dispatch(changeFilter('All'));
    dispatch(changeSearchText(''));
  }, [dispatch]);

  if (isLoading) {
    return (
      <CircularProgress
        color="inherit"
        sx={circularProgressStyles}
      />
    );
  }

  const isCurrentUser = authUserId === Number(id);

  return (
    <div className="container user-page">
      {name && (
        <UserCard
          name={name}
          email={email}
          postsAmount={posts.length}
          isNowUserCard={isCurrentUser}
          avatar={avatar}
        />
      )}
      {posts?.length
        ? <NewsList news={posts} />
        : <CustomAlert message={NO_NEWS_MESSAGE} severity="info" />}
    </div>
  );
}

export default memo(UserPage);
