import { fetchUser } from "../action/action";
import axios from 'axios';


//const url = 'localhost:3001/users';
function users() {
    return dispatch => {
        axios.get(`https://api.ict-servicedesk.xyz/users`, {
            headers: {
                ApiKey: "mutiara"
            }
        })
            .then(res => {
                const user = res.data;
                dispatch(fetchUser(user));
            })
    }
}



export default users;
