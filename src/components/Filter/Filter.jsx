import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import getFields from '../../helpers/getFields';
import FILTERS from './constants';
import { changeFilter } from '../../redux/actions/news';

function Search() {
  const dispatch = useDispatch();
  const location = useLocation();

  const [filter, setFilter] = useState('All');

  const onInputChange = (event) => {
    setFilter(event.target.value);
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
