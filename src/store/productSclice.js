import data from '../data/products'
const { createSlice } = require('@reduxjs/toolkit');

export const STATUSES= Object.freeze({
    IDLE:'idle',
    ERROR:'error',
   LOADING :"loading"
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data:[],
        status:STATUSES.IDLE
    },

    reducers: {
        setProducts(state, action) {
            state.data=action.payload;
            // state.push(action.payload);
        },
        setStatus(state,action){
            state.status=action.payload
        },
       
      
    },
});

export const { setProducts,setStatus } = productSlice.actions;
export default productSlice.reducer;



export function fetchProducts(){
    return async function fetchProducts(dispatch,getState){
        dispatch(setStatus(STATUSES.IDLE)) 
        try{
        // const res=  await fetch(data) 
        dispatch(setProducts(data))
    }catch(err){
        console.log(err,"err in thunk")
        dispatch(setStatus(STATUSES.ERROR ))
    }
    }
 
}