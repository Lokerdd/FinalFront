import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CircularProgress from '@mui/material/CircularProgress';

import { getNews } from '../redux/actions/news';
import NewsList from '../components/NewsList/NewsList';
import CustomAlert from '../components/CustomAlert/CustomAlert';

import './MainPage.css';

function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const { news, isLoading, error } = useSelector((state) => state.news);

  if (isLoading) {
    return <CircularProgress color="inherit" />;
  }

  return news.length
    ? <NewsList news={news} />
    : <CustomAlert error={error} />;
}

export default MainPage;
