
import { fetchTiket } from "../action/action";
import axios from 'axios';

const urlTiket = 'localhost:3001/tickets';
function tickets() {
    return dispatch => {
        axios.get(`https://api.ict-servicedesk.xyz/tickets`, {
            headers: {
                ApiKey: "mutiara"
            }
        })
            .then(res => {
                const tiket = res.data;
                dispatch(fetchTiket(tiket));
            })
    }
}

export default tickets;