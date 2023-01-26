import React from 'react';
import { useSelector } from 'react-redux';

import NewsCard from '../components/news-card/NewsCard';

import './MainPage.css';

function MainPage() {
  return (
    <div className="app__content content">
      <header className="content__header header">
        <h1 className="header__site-name">News</h1>
      </header>
      <main className="content__main main">
        <ul className="main__news">
          { useSelector((state) => state.news.data).map((item) => (
            <NewsCard
              key={item.id}
              userId={item.user_id}
              header={item.header}
              description={item.description}
              date={item.created_at}
              tags={item.tags}
              user={item.user}
            />
          )) }
        </ul>
      </main>
    </div>
  );
}

export default MainPage;
