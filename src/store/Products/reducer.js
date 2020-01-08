
const initialState = {
    products: '',
  }
    
  export const products = (state=initialState, action) => {
    switch (action.type) {
      case "GET_PRODUCTS": {
        return {
          ...state,
          products: action.data
        }
      }
      default: {
        return state
      }
    }
  }