import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CircularProgress from '@mui/material/CircularProgress';

import { changeSearchText, changeFilter, getNews } from '../../redux/actions/news';
import NewsList from '../../components/NewsList';
import CustomAlert from '../../components/CustomAlert';

import './MainPage.css';
import circularProgressStyles from './styles';

const NO_NEWS_MESSAGE = 'No news available';

function MainPage() {
  const {
    news,
    isLoading,
    error,
    searchText,
    currentFilter,
    page,
  } = useSelector((state) => state.news);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeFilter('All'));
    dispatch(changeSearchText(''));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getNews());
  }, [searchText, currentFilter, page]);

  if (isLoading) {
    return (
      <CircularProgress
        color="inherit"
        sx={circularProgressStyles}
      />
    );
  }

  return (
    <div className="container">
      {error && <CustomAlert message={error} severity="error" />}
      {!error && (
        news.length
          ? <NewsList news={news} />
          : <CustomAlert message={NO_NEWS_MESSAGE} severity="info" />)}
    </div>
  );
}

export default memo(MainPage);
