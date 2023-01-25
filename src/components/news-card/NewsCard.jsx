import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function NewsCard({ header, description }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { header }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { description }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
NewsCard.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default NewsCard;
