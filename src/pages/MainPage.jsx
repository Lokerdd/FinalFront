import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CircularProgress from '@mui/material/CircularProgress';

import { getNews } from '../redux/actions/news';
import NewsList from '../components/NewsList/NewsList';
import CustomAlert from '../components/CustomAlert/CustomAlert';

import './MainPage.css';

const NO_NEWS_MESSAGE = 'No news available';

function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const { news, isLoading, error } = useSelector((state) => state.news);

  if (isLoading) {
    return <CircularProgress color="inherit" />;
  }

  return (
    <>
      {error && <CustomAlert message={error} severity="error" />}
      {!error && (
        news.length > 0
          ? <NewsList news={news} />
          : <CustomAlert message={NO_NEWS_MESSAGE} severity="info" />)}
    </>
  );
}

export default MainPage;
