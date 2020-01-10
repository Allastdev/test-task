
const initialState = {
    userProfile: [],
    error: ''
  }
    
  export const userProfile = (state=initialState, action) => {
    switch (action.type) {
      case "GET_PROFILE": {
        return {
          ...state,
          userProfile: action.data
        }
      }
      case "USER_CREDENTIALS_ERROR": {
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