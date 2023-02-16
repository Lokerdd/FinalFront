import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { userRequest } from '../../redux/actions/user';
import NewsList from '../../components/NewsList/NewsList';
import UserCard from '../../components/UserCard/UserCard';
import CustomAlert from '../../components/CustomAlert/CustomAlert';
import NO_NEWS_MESSAGE from './constants';

import './UserPage.css';

function UserPage() {
  const { name, email } = useSelector((state) => state.user.user);
  const posts = useSelector((state) => state.user.userPost);
  const authUserId = useSelector((state) => state.auth.authUser.id);

  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userRequest(id));
  }, [dispatch]);

  const isNowUser = authUserId === Number(id);

  return (
    <div className="container user-page">
      {name && (
        <UserCard
          name={name}
          email={email}
          postsAmount={posts.length}
          isNowUserCard={isNowUser}
        />
      )}
      {posts?.length
        ? <NewsList news={posts} />
        : <CustomAlert message={NO_NEWS_MESSAGE} severity="info" />}
    </div>
  );
}

export default memo(UserPage);
