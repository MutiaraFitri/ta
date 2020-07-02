
import { fetchSummaryDoneSucces,fetchSummaryAssignSucces,fetchSummaryCancelSucces,fetchSummaryEscalatedSucces,fetchSummaryThisMonthSucces } from "../action/action";
import axios from 'axios';
import { prod } from '../url/server';

const url = prod;

export function fetchSummary(status,id) {
    if (status === "done") {
        return dispatch => {
            axios.get(url + 'summary/done/'+id, {
                headers: {
                    key: "8dfcb234a322aeeb6b530f20c8e9988e"
                }
            })
                .then(res => {
                    const tiket = res.data;
                    //console.log("data summary DONE", tiket)
                    dispatch(fetchSummaryDoneSucces(tiket));
                })
        }
    }
    else if (status === "cancel") {
        return dispatch => {
            axios.get(url + 'summary/cancel/'+id, {
                headers: {
                    key: "8dfcb234a322aeeb6b530f20c8e9988e"
                }
            })
                .then(res => {
                    const tiket = res.data;
                    //console.log("data summary DONE", tiket)
                    dispatch(fetchSummaryCancelSucces(tiket));
                })
        }
    }
    else if (status === "escalated") {
        return dispatch => {
            axios.get(url + 'summary/escalated/'+id, {
                headers: {
                    key: "8dfcb234a322aeeb6b530f20c8e9988e"
                }
            })
                .then(res => {
                    const tiket = res.data;
                    //console.log("data summary DONE", tiket)
                    dispatch(fetchSummaryEscalatedSucces(tiket));
                })
        }
    }
    else if (status === "this_month") {
        return dispatch => {
            axios.get(url + 'summary/6/'+id, {
                headers: {
                    key: "8dfcb234a322aeeb6b530f20c8e9988e"
                }
            })
                .then(res => {
                    const tiket = res.data;
                    //console.log("data summary DONE", tiket)
                    dispatch(fetchSummaryThisMonthSucces(tiket));
                })
        }
    }
    else{
        return dispatch => {
            axios.get(url + 'summary/all/'+id, {
                headers: {
                    key: "8dfcb234a322aeeb6b530f20c8e9988e"
                }
            })
                .then(res => {
                    const tiket = res.data;
                    //console.log("data summary ASSIGN", tiket)
                    dispatch(fetchSummaryAssignSucces(tiket));
                })
        }
    }
}