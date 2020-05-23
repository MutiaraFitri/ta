import { fetchUser } from "../action/action";
import axios from 'axios';


//const url = 'localhost:3001/technician';
function technician() {
    return dispatch => {
        axios.get(`https://api.ict-servicedesk.xyz/technician`, {
            headers: {
                ApiKey: "mutiara"
            }
        })
            .then(res => {
                const technician = res.data;
                dispatch(fetchUser(technician));
            })
    }
}



export default technician;
