import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CircularProgress from '@mui/material/CircularProgress';

import { getNews, changeFilter } from '../../redux/actions/news';
import NewsList from '../../components/NewsList';
import CustomAlert from '../../components/CustomAlert';
import getFilteredNews from '../../helpers/getFilteredNews';

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
  } = useSelector((state) => state.news);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
    dispatch(changeFilter('All'));
  }, [dispatch]);

  if (isLoading) {
    return (
      <CircularProgress
        color="inherit"
        sx={circularProgressStyles}
      />
    );
  }

  const filteredNews = getFilteredNews(searchText, currentFilter, news);

  return (
    <div className="container">
      {error && <CustomAlert message={error} severity="error" />}
      {!error && (
        news.length > 0
          ? <NewsList news={filteredNews} />
          : <CustomAlert message={NO_NEWS_MESSAGE} severity="info" />)}
    </div>
  );
}

export default memo(MainPage);
