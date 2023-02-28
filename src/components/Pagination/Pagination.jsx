import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Pagination from '@mui/material/Pagination';

import { switchPage } from '../../redux/actions/news';

import './Pagination.css';

function PaginationControlled() {
  const { page, amountOfPages } = useSelector(
    (state) => state.news,
  );

  const dispatch = useDispatch();

  const handleChange = useCallback((event, value) => {
    dispatch(switchPage(value));
  }, []);

  return (
    <Pagination
      className="pagination"
      count={amountOfPages}
      page={page}
      onChange={handleChange}
    />
  );
}

export default memo(PaginationControlled);
