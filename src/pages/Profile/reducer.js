
const initialState = {
    userProfile: [],
    error: '',
    getUserError: ''
  }
    
  export const userProfile = (state=initialState, action) => {
    switch (action.type) {
      case "GET_PROFILE": {
        return {
          ...state,
          userProfile: action.data
        }
      }
      case "GET_PROFILE_ERROR": {
        return {
          ...state,
          getUserError: action.data.message,
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