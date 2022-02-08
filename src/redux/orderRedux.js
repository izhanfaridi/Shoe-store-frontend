import {createSlice} from '@reduxjs/toolkit';

const orderSlice = createSlice({
    name:"order",
    initialState:{
        currentUser:null,
        products:[],
        amount:0,
        address:null,
        status:pending,
    },
    reducers:{
        addOrder:(state,action)=>{
            
        },
        
    }
})

export const {orderStart,orderSuccess,orderFailure} = orderSlice.actions;
export default orderSlice.reducer;