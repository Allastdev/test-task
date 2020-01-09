const initialState = {
  status: false,
};

export const routers = (state = initialState, action) => {
  switch(action.type) {
    case 'ROUTERS_RENDER': {
      return {
        ...state,
        status: action.value
      }
    }
    case 'LOG_OUT': {
      return {
        ...state,
        status: action.value
      }
    }
    default: {
      return state;
    }
  }
};

 