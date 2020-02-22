export const FETCH_PRODUCT_PENDING = 'FETCH_PENDING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_TIKET_SUCCESS = 'FETCH_TIKET_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchProductPending = () => {
    // console.log("asu")
    return {
        type: FETCH_PRODUCT_PENDING,
        value: "pending"
    }
}

export const fetchProductSuccess = () => {
    return {
        type: FETCH_SUCCESS,
        value: "success"
    }
}

export const fectProductError = (error = "error") => {
    return {
        type: FETCH_ERROR,
        value: error
    }
}

export const fetchUser = (user) => {
    return {
        type: FETCH_USER_SUCCESS,
        value: user
    }
}

export const fetchTiket = (tiket) => {
    return {
        type: FETCH_TIKET_SUCCESS,
        value: tiket
    }
}
