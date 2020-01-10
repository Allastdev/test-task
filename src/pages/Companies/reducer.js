
const initialState = {
    companies: [],
    error: '',
  }
    
  export const profile = (state=initialState, action) => {
    switch (action.type) {
      case "GET_COMPANIES": {
        return {
          ...state,
          companies: action.data
        }
      }
      case 'GET_COMPANIES_ERROR': {
        return {
          ...state, 
          error: action.data.message,
        }
      }
      default: {
        return state
      }
    }
  }