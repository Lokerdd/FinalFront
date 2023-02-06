import * as actionTypes from '../actionTypes';

const initialState = {
  isOpen: false,
  modalType: null,
};

const modalReducer = (state = initialState, action = null) => {
  switch (action.type) {
    case actionTypes.TOGGLE_MODAL:
      return {
        isOpen: action.payload.isOpen,
        modalType: action.payload.type,
      };
    default:
      return state;
  }
};

export default modalReducer;
