import React from 'react';

import NewsCard from '../components/news-card/NewsCard';

const newsData = [
  {
    id: 1,
    name: 'Что-то снова произошло',
    description: 'И правда, как всегда something went wrong. Например вывод этой новости на главную страницу.',
  },
  {
    id: 2,
    name: 'Что-то снова произошло',
    description: 'И правда, как всегда something went wrong. Например вывод этой новости на главную страницу.',
  },
  {
    id: 3,
    name: 'Что-то снова произошло',
    description: 'И правда, как всегда something went wrong. Например вывод этой новости на главную страницу.',
  },
];

function MainPage() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="header__site-name">News</h1>
      </header>
      <main className="main">
        <ul className="main__news">
          {newsData.map((item) => (
            <NewsCard
              key={item.id}
              header={item.name}
              description={item.description}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default MainPage;
