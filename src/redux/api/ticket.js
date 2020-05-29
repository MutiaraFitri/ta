
import { fetchTiket } from "../action/action";
import axios from 'axios';

//const urlTiket = 'localhost:3001/tickets';
export function tickets() {
    return dispatch => {
        axios.get(`https://api.ict-servicedesk.xyz/ticket`, {
            headers: {
                key: "8dfcb234a322aeeb6b530f20c8e9988e"
            }
        })
            .then(res => {
                const tiket = res.data;
                console.log("data", tiket)
                dispatch(fetchTiket(tiket));
            })
    }
}
export function ticketsById(id) {
    return dispatch => {
        axios.get(`https://api.ict-servicedesk.xyz/ticket/id/` + id, {
            headers: {
                key: "8dfcb234a322aeeb6b530f20c8e9988e"
            }
        })
            .then(res => {
                const tiket = res.data;
                // localStorage.setItem("jwt", tiket.values.jwt);
                console.log("data", tiket)
                dispatch(fetchTiket(tiket));
            })
    }
}