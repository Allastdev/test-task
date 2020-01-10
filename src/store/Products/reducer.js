
const initialState = {
    products: '',
    error: ''
  }
    
  export const products = (state=initialState, action) => {
    switch (action.type) {
      case "GET_PRODUCTS": {
        return {
          ...state,
          products: action.data
        }
      }
      case "GET_PRODUCTS_ERROR": {
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