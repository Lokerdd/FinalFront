import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import getFields from '../../helpers/getFields';
import { GENERAL_FILTERS, USER_PAGE_FILTERS } from './constants';
import { changeFilter } from '../../redux/actions/news';

function Search() {
  const filter = useSelector((state) => state.news.currentFilter);

  const dispatch = useDispatch();
  const location = useLocation();

  const onFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  const fields = location.pathname.includes('users')
    ? getFields(USER_PAGE_FILTERS)
    : getFields(GENERAL_FILTERS);

  return (
    <Select
      id="filter"
      size="small"
      value={filter}
      onChange={onFilterChange}
    >
      {
        fields.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)
      }
    </Select>
  );
}

export default memo(Search);
