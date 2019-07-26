import axios from 'axios'

export const GRAB_SMURF_START = "GRAB_SMURF_START"

export const GRAB_SMURF_SUCCESS = "GRAB_SMURF_SUCCESS"

export const GRAB_SMURF_FAILURE = "GRAB_SMURF_FAILURE"



export const getDatSmurf = () => dispatch => {
    dispatch({GRAB_SMURF_START});

    return axios
        .get()
        .then()
        .catch()
}