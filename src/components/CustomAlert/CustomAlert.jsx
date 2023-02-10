import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Alert from '@mui/material/Alert';

function CustomAlert({ severity, message, alertWidth }) {
  return (
    <Alert
      severity={severity}
      sx={{
        width: alertWidth,
        margin: '0 auto',
        borderRadius: '10px',
      }}
    >
      {message}
    </Alert>
  );
}
CustomAlert.propTypes = {
  severity: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  alertWidth: PropTypes.string,
};
CustomAlert.defaultProps = {
  alertWidth: '100%',
};

export default memo(CustomAlert);
