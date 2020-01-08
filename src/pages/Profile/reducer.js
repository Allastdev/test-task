
const initialState = {
    userProfile: []
  }
    
  export const userProfile = (state=initialState, action) => {
    switch (action.type) {
      case "GET_PROFILE": {
        return {
          ...state,
          userProfile: action.data
        }
      }
      default: {
        return state
      }
    }
  }