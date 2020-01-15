const initialState = {
    singel_companie: [],
    getErrorMessage: '',
    errorMessage: '',
    addReviewErrorMessage: ''
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
          getErrorMessage: action.data.message
        }
      }
      case 'ADD_REVIEW': {
        return {
          ...state,
          errorMessage: action.data,
        }
      }
      case 'ADD_REVIEW_ERROR': {
        return {
          ...state,
          addReviewErrorMessage: action.data.message,
        }
      }
      default: {
        return state
      }
    }
  }