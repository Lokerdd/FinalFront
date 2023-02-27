import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@mui/material/TextField';

import { changeSearchText, switchPage } from '../../redux/actions/news';

function Search() {
  const searchText = useSelector((state) => state.news.searchText);

  const dispatch = useDispatch();

  const onSearchTextChange = (event) => {
    dispatch(changeSearchText(event.target.value));
    dispatch(switchPage(1));
  };

  return (
    <TextField
      id="search"
      height="10px"
      placeholder="Search..."
      size="small"
      onChange={onSearchTextChange}
      value={searchText}
      sx={{ mr: 1 }}
    />
  );
}

export default memo(Search);
