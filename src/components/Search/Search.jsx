import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@mui/material/TextField';

import { findNews } from '../../redux/actions/news';

function Search() {
  const searchText = useSelector((state) => state.news.searchText);

  const dispatch = useDispatch();

  const onInputChange = (event) => {
    dispatch(findNews(event.target.value));
  };

  return (
    <TextField
      id="search"
      height="10px"
      placeholder="Search..."
      size="small"
      onChange={onInputChange}
      value={searchText}
      sx={{ mr: 1 }}
    />
  );
}

export default memo(Search);
