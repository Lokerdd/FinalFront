import React, { memo } from 'react';

import TextField from '@mui/material/TextField';

import searchStyles from './styles';

function Search() {
  return (
    <TextField
      placeholder="Search..."
      sx={searchStyles}
    />
  );
}

export default memo(Search);
