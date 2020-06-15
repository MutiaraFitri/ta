import { fetchNotification } from '../action/action';
import axios from 'axios';
import { prod } from './../url/server'
const url = prod;
const jwt = require('jsonwebtoken');

// const url = "http://localhost:3001/tickets" fetchIssue

export function getNotificationByEmployeeId() {

    return dispatch => {
        jwt.verify(localStorage.getItem("jwt"), 'dimasputray', (err, decoded) => {
            if (err) {
                console.log("Error", err)
                localStorage.removeItem("jwt");
                // dispatch(loginFailed("Your session has expired"));
            }
            else {
                const user = decoded.data;
                const myData = ({...user});
                console.log(myData);
                axios.get(url + 'notification/technician/' + myData.user_id, {
                    headers: {
                        key: '8dfcb234a322aeeb6b530f20c8e9988e'
                    }
                }
                )
                    .then(res => res.data)
                    .then(res => {
                        if (res.error) {
                            throw (res.error);
                        }
                        // console.log(res);
                        dispatch(fetchNotification(res));
                        return res.data;
                    })
                    .catch(error => {
                        console.log("Error " + error);
                        // dispatch(fetchTicketError(error));
                    })
            }
        });
    }
}