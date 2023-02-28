import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import CustomModal from '../CustomModal';
import Pagination from '../Pagination';

function Layout() {
  return (
    <>
      <CustomModal />
      <Header />
      <Outlet />
      <Pagination />
    </>
  );
}

export default memo(Layout);
