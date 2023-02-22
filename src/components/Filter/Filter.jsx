import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import getFields from '../../helpers/getFields';
import FILTERS from './constants';
import { changeFilter } from '../../redux/actions/news';

function Search() {
  const filter = useSelector((state) => state.news.currentFilter);

  const dispatch = useDispatch();
  const location = useLocation();

  const onInputChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <Select
      id="filter"
      size="small"
      value={filter}
      onChange={onInputChange}
    >
      {
        getFields(FILTERS).map((item) => {
          if (
            item === 'Author'
            && location.pathname.includes('users')
          ) {
            return <MenuItem key={item} value={item} disabled>{item}</MenuItem>;
          }
          return <MenuItem key={item} value={item}>{item}</MenuItem>;
        })
      }
    </Select>
  );
}

export default memo(Search);
