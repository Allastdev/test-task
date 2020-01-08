import { act } from "react-dom/test-utils"

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
      case 'SIGN_UP_USER_ERROR_MESSAGE': {
        return {
          ...state,
          errorMessage: action.data,
        }
      }
      default: {
        return state
      }
    }
  }