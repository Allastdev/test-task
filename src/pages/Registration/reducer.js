const initialState = {
    register_response: '',
    errorMessage: '',
  }
    
  export const registration = (state=initialState, action) => {
    switch (action.type) {
      case 'SIGN_UP_USER': {
        return {
          ...state,
          register_response: action.data
        }
      }
      case 'SIGN_UP_USER_ERROR': {
        return {
          ...state,
          errorMessage: action.data.message,
        }
      }
      default: {
        return state
      }
    }
  }