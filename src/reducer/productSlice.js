import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const STATUSES = Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loding',
});

const productSlice = createSlice({
    name:'product',
    initialState:{
        data:[],
        status:'STATUSES.IDLE',
    },
    reducers:{
        // setProducts(state, action){
        //     state.data = action.payload;
        // }, 
        // setStatus(state, action){
        //     state.status= action.payload;
        // },
    },
    extraReducers:(builder) =>{
        builder
        .addCase(fetchproduct.pending,(state,action) => {
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchproduct.fulfilled,(state,action) => {
            state.data = action.payload; 
            state.status = STATUSES.IDLE;
        })
        .addCase(fetchproduct.rejected,(state,action) => {
            state.status = STATUSES.ERROR;
        })
    }
})

export const { setProducts ,setStatus } = productSlice.actions
export default productSlice.reducer;



/// THunk ///

export const fetchproduct = createAsyncThunk('product/fetch',async() => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json(); 
    return data;
});

/// classic way ///

// export function fetchproduct(){
//     return async function fetchproductThunk(dispatch,getstate){
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json(); 
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE));

//         } catch (error) {
//             console.log(error);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     }
// }