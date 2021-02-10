import Axios from "axios";
import { SET_ORDER_INFO } from "../constants/orderConstants";


export const getOrderInfo = (orderData) => async (dispatch) => {
    // dispatch({
    //     type: SET_ORDER_INFO,
    //     payload: {
    //         data
    //     }
    // });
    console.log("order data in action", orderData);

    try {
        const { data } = await Axios.post('/api/orders/place', { orderData });
        console.log("received data in action", data);
        // dispatch({
        //     type: SET_ORDER_INFO),
        //     payload: data,
        // });
        // localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (err) {
        console.log("err==>", err);
        
        // dispatch({
        //     type: USER_SIGNIN_FAIL,
        //     payload: err.response && err.response.data.message ?
        //         err.response.data.message : err.message,
        // });
    }
};