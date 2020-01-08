const initialState = {
    errorMessage: ''
  }
    
  export const login = (state=initialState, action) => {
    switch (action.type) {
      case "LOGGED_IN_ERROR": {
        return {
          ...state,
          errorMessage: action.data
        }
      }
      default: {
        return state
      }
    }
  }