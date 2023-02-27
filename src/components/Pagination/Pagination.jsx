import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';

import { switchPage } from '../../redux/actions/news';

import './Pagination.css';

export default function PaginationControlled() {
  const { page, amountOfPages } = useSelector(
    (state) => state.news,
  );

  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    dispatch(switchPage(value));
  };

  return (
    <Pagination
      className="pagination"
      count={amountOfPages}
      page={page}
      onChange={handleChange}
    />
  );
}
