import { fetchNotification } from '../action/action';
import axios from 'axios';
import {prod} from './../url/server'
const url = prod;
// const url = "http://localhost:3001/tickets" fetchIssue

export function getNotificationByEmployeeId(id) {
    return dispatch => {
        axios.get(url +'notification/employee/'+ id, {
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
}