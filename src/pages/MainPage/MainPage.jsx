import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CircularProgress from '@mui/material/CircularProgress';

import { getNews } from '../../redux/actions/news';
import NewsList from '../../components/NewsList/NewsList';
import CustomAlert from '../../components/CustomAlert/CustomAlert';

import './MainPage.css';
import circularProgressStyles from './styles';

const NO_NEWS_MESSAGE = 'No news available';

function MainPage() {
  const { news, isLoading, error } = useSelector((state) => state.news);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  if (isLoading) {
    return (
      <CircularProgress
        color="inherit"
        sx={circularProgressStyles}
      />
    );
  }

  return (
    <>
      {error && <CustomAlert message={error} severity="error" alertWidth="60%" />}
      {!error && (
        news.length > 0
          ? <NewsList news={news} />
          : <CustomAlert message={NO_NEWS_MESSAGE} severity="info" alertWidth="60%" />)}
    </>
  );
}

export default MainPage;
