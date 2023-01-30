import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import CardActionArea from '@mui/material/CardActionArea';

import './NewsCard.css';

function NewsCard({
  header,
  description,
  tags,
  user,
}) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./assets/images/no-news-image.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { header }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { description }
          </Typography>
          <div className="tags">
            {tags.map((item) => <Chip key={item.name} label={item.name} variant="outlined" />)}
          </div>
          <div className="post-data">
            <p className="author">{`Автор: ${user.name}`}</p>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

NewsCard.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
  }),
};
NewsCard.defaultProps = {
  tags: [],
  user: {},
};

export default memo(NewsCard);
