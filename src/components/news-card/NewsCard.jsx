import * as React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { CardActionArea } from '@mui/material';

import './NewsCard.css';

function NewsCard({
  userId,
  header,
  description,
  tags,
  user,
  date,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
            {tags.map((item) => <Chip label={item.name} variant="outlined" />)}
          </div>
          <div className="post-data">
            <a href={`/user/${userId}`} className="post-data__author">{user.name}</a>
            <p className="post-data__date">{date}</p>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
NewsCard.propTypes = {
  userId: PropTypes.number.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  date: PropTypes.string,
  user: PropTypes.objectOf(
    PropTypes.number,
    PropTypes.string,
    PropTypes.string,
  ),
};
NewsCard.defaultProps = {
  tags: [],
  date: '',
  user: {},
};

export default NewsCard;
