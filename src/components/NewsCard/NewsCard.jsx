import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
  image,
}) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image || '../assets/images/no-news-image.png'}
          alt="Article image"
        />
        <CardContent>
          <div>
            <Typography gutterBottom variant="h5" component="div">
              { header }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              { description }
            </Typography>
          </div>
          <div>
            <div className="tags">
              {tags.map(({ name }) => <Chip key={name} label={name} variant="outlined" />)}
            </div>
            <div className="post-data">
              {
                user?.id && (
                  <p>
                    Author:&nbsp;
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                  </p>
                )
              }
            </div>
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
  image: PropTypes.string,
};
NewsCard.defaultProps = {
  tags: [],
  user: {},
  image: undefined,
};

export default memo(NewsCard);
