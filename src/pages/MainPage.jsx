import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';

import { getNews } from '../redux/actions/news';
import NewsList from '../components/NewsList/NewsList';
import Header from '../components/Header/Header';
import CustomAlert from '../components/CustomAlert/CustomAlert';

import './MainPage.css';

function view(data) {
  return (
    <div className="content">
      <Header />
      <main className="main">
        {data}
      </main>
    </div>
  );
}

function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const { news, isLoading, error } = useSelector((state) => state.news);

  if (isLoading) {
    return view(<CircularProgress color="inherit" />);
  }

  return news.length
    ? view(<NewsList news={news} />)
    : view(<CustomAlert error={error} />);

  // if (error) {
  //   return view(`Error: ${error.message}`);
  // }

  // return view(<NewsList news={news} />);
}

export default MainPage;
