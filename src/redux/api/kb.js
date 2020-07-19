
import { fetchKb } from "../action/action";
import axios from 'axios';

//const urlTiket = 'localhost:3001/tickets';
export function kb() {
    return dispatch => {
        axios.get(`https://api.ict-servicedesk.xyz/knowledge_base_technician`, {
            headers: {
                key: "8dfcb234a322aeeb6b530f20c8e9988e"
            }
        })
            .then(res => {
                const kb = res.data.values;
                // console.log("data", kb)
                dispatch(fetchKb(kb));
            })
    }
}