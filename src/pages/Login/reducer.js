const initialState = {
    errorMessage: '',
    logged_role: '',
    user: {}
  }
    
  export const login = (state=initialState, action) => {
    switch (action.type) {
      case "LOGGED_IN_ERROR": {
        return {
          ...state,
          errorMessage: action.data
        }
      }
      case "LOGGED_USER": {
        return {
          ...state,
          logged_role: action.data.role,
          user: action.data
        }
      }
      default: {
        return state
      }
    }
  }