import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Alert from '@mui/material/Alert';

import './CustomAlert.css';

function CustomAlert({ severity, message }) {
  return (
    <Alert severity={severity}>
      {message}
    </Alert>
  );
}
CustomAlert.propTypes = {
  severity: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default memo(CustomAlert);
