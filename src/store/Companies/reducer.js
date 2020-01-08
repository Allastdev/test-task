const initialState = {
    companies: []
  }
    
  export const companies = (state=initialState, action) => {
    switch (action.type) {
      case "GET_COMPANIES": {
        return {
          ...state,
          companies: action.data
        }
      }
      default: {
        return state
      }
    }
  }