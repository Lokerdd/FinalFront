import React from 'react';
import PropTypes from 'prop-types';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import './CustomAlert.css';

function CustomAlert({ error }) {
  if (error) {
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {error}
      </Alert>
    );
  }
  return (
    <Alert severity="info">
      <AlertTitle>No news right now</AlertTitle>
    </Alert>
  );
}
CustomAlert.propTypes = {
  error: PropTypes.string,
};
CustomAlert.defaultProps = {
  error: null,
};

export default CustomAlert;
