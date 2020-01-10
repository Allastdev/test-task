
const initialState = {
    categories: '',
    error: ''
  }
    
  export const categories = (state=initialState, action) => {
    switch (action.type) {
      case "GET_CATEGORIES": {
        return {
          ...state,
          categories: action.data
        }
      }
      case "GET_CATEGORIES_ERROR": {
        return {
          ...state,
          error: action.data.message
        }
      }
      default: {
        return state
      }
    }
  }