import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,
    },
    reducers:{
        addProduct:(state,action)=>{
            state.quantity+=1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.qty;
        },
        deleteProduct:(state,action)=>{
            console.log(action.payload)
            state.products.filter((x)=>{
                if(x._id===action.payload){
                    state.total -= x.price * x.qty
                }
            })
            state.quantity-=1
            const modifiedCart = state.products.filter(item => item._id !== action.payload)
            state.products = modifiedCart
            // state.total=305
            // state.total -= action.payload.price * action.payload.qty;
            // state.products.splice(state.products.findIndex((data) => data.id === action.payload), 1);

        },

       
    },
})

export const {addProduct, deleteProduct } =cartSlice.actions;
export default cartSlice.reducer;

    