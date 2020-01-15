const initialState = {
    reviews: [],
   }
     
   export const singel_companie = (state=initialState, action) => {
     switch (action.type) {
       case 'GET_REVIEWS': {
         return {
           ...state,
           reviews: action.data,
         }
       }
       default: {
         return state
       }
     }
   }