
const initialState = {
    categories: '',
  }
    
  export const categories = (state=initialState, action) => {
    switch (action.type) {
      case "GET_CATEGORIES": {
        return {
          ...state,
          categories: action.data
        }
      }
      default: {
        return state
      }
    }
  }