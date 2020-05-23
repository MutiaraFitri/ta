import { fetchUser, userLogout } from "../action/action";
import axios from 'axios';

const jwt = require('jsonwebtoken');
//const url = 'localhost:3001/users';
export function users() {
    return dispatch => {

        jwt.verify(localStorage.getItem("jwt"), 'dimasputray', function (err, decoded) {
            if (err) {
                console.log("Error", err)
                localStorage.removeItem("jwt");
                // dispatch(loginFailed("Your session has expired"));
            }
            console.log(decoded) // bar
            dispatch(fetchUser(decoded));
        });

    }
}

export function userLoginFetch(data) {
    // console.log(data)

    return dispatch => {
        axios.post(`https://api.ict-servicedesk.xyz/auth/login/technician`, data, {
            headers: {
                key: "8dfcb234a322aeeb6b530f20c8e9988e"
            }
        })
            .then(res => {
                const user = res.data;
                localStorage.setItem("jwt", user.values.jwt);
                console.log("data", user)
                dispatch(fetchUser(user));
            })
    }
}
export function userLogOut() {
    return dispatch => {
        dispatch(userLogout())
    }
}



export default users;
