import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import getFields from '../../helpers/getFields';
import FILTERS from './constants';
import { changeFilter, switchPage } from '../../redux/actions/news';

function Search() {
  const filter = useSelector((state) => state.news.currentFilter);

  const dispatch = useDispatch();

  const onFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
    dispatch(switchPage(1));
  };

  const fields = getFields(FILTERS);

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
