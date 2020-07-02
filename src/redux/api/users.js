import { fetchUser, userLogout, loginFailed, updatePasswordSuccess, updatePasswordFailed, requestResetPasswordSuccess, requestResetPasswordFailed, fectProductError } from "../action/action";
import axios from 'axios';
import { prod } from './../url/server';

const url = prod;
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
            if (decoded) {
                // console.log("decoded", decoded) // bar
                dispatch(fetchUser(decoded.data));
            }
        });
    }
}

export function setNullError() {
    return dispatch => {
        dispatch(loginFailed(null));
    }
}

export function updatePassword(data) {
    return dispatch => {
        axios.put(url + "auth/password/technician", data, {
            headers: {
                key: '8dfcb234a322aeeb6b530f20c8e9988e'
            }
        }
        )
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                else {
                    dispatch(updatePasswordSuccess());
                }
            })
            .catch(error => {
                console.log("Error " + error);
                dispatch(updatePasswordFailed());
            })
    }
}

export function resetPassword(data) {
    return dispatch => {
        axios.post(url + "auth/reset/technician", data, {
            headers: {
                key: '8dfcb234a322aeeb6b530f20c8e9988e'
            }
        }
        )
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                if (res.data.values.jwt) {
                    dispatch(requestResetPasswordSuccess());
                }
                else {
                    dispatch(requestResetPasswordFailed());
                }
            })
            .catch(error => {
                console.log("Error " + error);
                dispatch(fectProductError(error));
            })
    }
}

export function userLoginFetch(data) {
    // console.log(data)

    return dispatch => {
        axios.post(url + `auth/login/technician`, data, {
            headers: {
                key: "8dfcb234a322aeeb6b530f20c8e9988e"
            }
        })
            .then(res => res.data)
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                console.log(res);
                if (res.values.jwt) {
                    console.log("data", res.data)
                    localStorage.setItem('jwt', res.values.jwt)
                    dispatch(fetchUser(res));
                    // console.log(localStorage.getItem('user'))

                    // console.log(res.jwt);
                    return res.data;
                } else {
                    dispatch(loginFailed(res.values.message));
                }
            })
    }
}
export function userLogOut() {
    return dispatch => {
        dispatch(userLogout())
    }
}

export function userEdit(data) {
    return dispatch => {
        jwt.verify(localStorage.getItem("jwt"), 'dimasputray', function (err, decoded) {
            dispatch(decoded.data.user_id)
        });

    }
}



export default users;
