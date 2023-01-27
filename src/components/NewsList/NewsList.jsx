import React from 'react';
import PropTypes from 'prop-types';

import NewsCard from '../NewsCard/NewsCard';

import './NewsList.css';

function NewsList({ news }) {
  return (
    <div className="news-list">
      {news.map((item) => (
        <NewsCard
          key={item.id}
          header={item.header}
          description={item.description}
          tags={item.tags}
          user={item.user}
        />
      )) }
    </div>
  );
}
NewsList.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default NewsList;
