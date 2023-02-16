import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import toggleModal from '../../redux/actions/modal';
import getForms from './helpers';

import { boxStyles, modalNameStyles } from './styles';

function CustomModal() {
  const { isOpen, modalType } = useSelector((state) => state.modal);

  const dispatch = useDispatch();
  const onModalClose = () => {
    dispatch(toggleModal({ isOpen: false }));
  };

  return (
    <Modal
      open={isOpen}
      onClose={onModalClose}
    >
      <Box
        sx={boxStyles}
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={modalNameStyles}
        >
          {modalType}
        </Typography>
        {getForms(modalType)}
      </Box>
    </Modal>
  );
}

export default memo(CustomModal);
