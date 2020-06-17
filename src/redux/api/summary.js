
import { fetchSummaryDoneSucces,fetchSummaryAssignSucces } from "../action/action";
import axios from 'axios';
import { dev } from '../url/server';

const url = dev;

export function fetchSummary(status) {
    if (status === "DONE") {
        return dispatch => {
            axios.get(url + 'summary/week/done/6/9', {
                headers: {
                    key: "8dfcb234a322aeeb6b530f20c8e9988e"
                }
            })
                .then(res => {
                    const tiket = res.data;
                    console.log("data summary DONE", tiket)
                    dispatch(fetchSummaryDoneSucces(tiket));
                })
        }
    }
    else{
        return dispatch => {
            axios.get(url + 'summary/week/assign/6/9', {
                headers: {
                    key: "8dfcb234a322aeeb6b530f20c8e9988e"
                }
            })
                .then(res => {
                    const tiket = res.data;
                    console.log("data summary ASSIGN", tiket)
                    dispatch(fetchSummaryAssignSucces(tiket));
                })
        }
    }
}