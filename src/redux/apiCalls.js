import { publicRequest, userRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import {registerStart,registerSuccess,registerFailure} from './registerRedux' 


export const login =async (dispatch,user)=>{
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login",user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
    }
}

export const register = async (dispatch,user) => {
    dispatch(registerStart());
    try{
        const res = await publicRequest.post("/auth/register",user)
        dispatch(registerSuccess(res.data))
        
    }catch(err){
        dispatch(registerFailure());
    }
  }

  export const addOrder = async (order, dispatch) => {
    try {
      const res = await userRequest.post(`/orders`, order);
    } catch (err) {
      console.log(err)
    }
  };