const initialState = {
    companies: [],
    errorMessage: ''
  }
    
  export const companies = (state=initialState, action) => {
    switch (action.type) {
      case "GET_COMPANIES": {
        return {
          ...state,
          companies: action.data
        }
      }
      case "GET_COMPANIES_ERROR": {
        return {
          ...state,
          errorMessage: action.data.message
        }
      }
      default: {
        return state
      }
    }
  }