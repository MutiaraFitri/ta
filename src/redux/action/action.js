export const LOGIN_ERROR = 'LOGIN_ERROR';
export const FETCH_PRODUCT_PENDING = 'FETCH_PENDING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const Request_Reset_Password_Success = 'Request_Reset_Password_Success';
export const Request_Reset_Password_Failed = 'Request_Reset_Password_Failed';
export const UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS';
export const UPDATE_PASSWORD_FAILED = 'UPDATE_PASSWORD_FAILED';
export const FETCH_KB_SUCCESS = 'FETCH_KB_SUCCESS';
export const FETCH_TIKET_SUCCESS = 'FETCH_TIKET_SUCCESS';
export const FETCH_TECHNICIAN_SUCCESS = 'FETCH_TECHNICIAN_SUCCESS';
export const FETCH_NOTIFICATION_SUCCESS = 'FETCH_NOTIFICATION_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const FETCH_SUMMARY_ASSIGN = 'FETCH_SUMMARY_ASSIGN';
export const FETCH_SUMMARY_DONE = 'FETCH_SUMMARY_DONE';
export const FETCH_SUMMARY_ESCALATED = 'FETCH_SUMMARY_ESCALATED';
export const FETCH_SUMMARY_CANCEL = 'FETCH_SUMMARY_CANCEL';
export const FETCH_SUMMARY_THIS_MONTH = 'FETCH_SUMMARY_THIS_MONTH';

export const fetchProductPending = () => {
    // console.log("asu")
    return {
        type: FETCH_PRODUCT_PENDING,
        value: "pending"
    }
}
export const fetchSummaryAssignSucces = (data) => {
    return {
        type: FETCH_SUMMARY_ASSIGN,
        value: data.values
    }
}
export const fetchSummaryThisMonthSucces = (data) => {
    return {
        type: FETCH_SUMMARY_THIS_MONTH,
        value: data.values
    }
}
export const fetchSummaryCancelSucces = (data) => {
    return {
        type: FETCH_SUMMARY_CANCEL,
        value: data.values
    }
}
export const fetchSummaryEscalatedSucces = (data) => {
    return {
        type: FETCH_SUMMARY_ESCALATED,
        value: data.values
    }
}
export const fetchSummaryDoneSucces = (data) => {
    return {
        type: FETCH_SUMMARY_DONE,
        value: data.values
    }
}

export const requestResetPasswordSuccess = () => {
    return {
        type: Request_Reset_Password_Success,
        value:"Success"
    }
}

export const requestResetPasswordFailed = () => {
    return {
        type: Request_Reset_Password_Failed,
        value:"Failed"
    }
}

export const loginFailed = (data) => {
    return {
        type: LOGIN_ERROR,
        value:data
    }
}

export const fetchProductSuccess = () => {
    return {
        type: FETCH_SUCCESS,
        value: "success"
    }
}

export const fetchNotification = (data) => {
    return {
        type: FETCH_NOTIFICATION_SUCCESS,
        value:data
    }
}

export const userLogout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

export const fectProductError = (error = "error") => {
    return {
        type: FETCH_ERROR,
        value: error
    }
}

export const fetchKb = (kb) => {
    return {
        type: FETCH_KB_SUCCESS,
        value: kb
    }
}
export const fetchUser = (user) => {
    return {
        type: FETCH_USER_SUCCESS,
        value: user
    }
}

export const updatePasswordFailed = () => {
    return {
        type: UPDATE_PASSWORD_FAILED,
        value:"Failed"
    }
}

export const updatePasswordSuccess = () => {
    return {
        type: UPDATE_PASSWORD_SUCCESS,
        value:"Success"
    }
}

export const fetchTiket = (tiket) => {
    return {
        type: FETCH_TIKET_SUCCESS,
        value: tiket
    }
}

export const fetchTechnician = (technician) => {
    return {
        type: FETCH_TECHNICIAN_SUCCESS,
        value: technician
    }
}