const initialState = {
    singel_companie: [],
    errorMessage: ''
  }
    
  export const singel_companie = (state=initialState, action) => {
    switch (action.type) {
      case 'GET_SINGLE_COMPANIE': {
        return {
          ...state,
          singel_companie: action.data,
        }
      }
      case 'GET_SINGLE_COMPANIE_ERROR': {
        return {
          ...state,
          errorMessage: action.data,
        }
      }
      default: {
        return state
      }
    }
  }