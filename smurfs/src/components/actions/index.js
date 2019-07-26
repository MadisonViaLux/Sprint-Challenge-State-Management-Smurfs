import axios from 'axios'

export const GRAB_SMURF_START = "GRAB_SMURF_START"

export const GRAB_SMURF_SUCCESS = "GRAB_SMURF_SUCCESS"

export const GRAB_SMURF_FAILURE = "GRAB_SMURF_FAILURE"



export const getDatSmurf = () => dispatch => {
    dispatch({ type: GRAB_SMURF_START });

    return axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res)
            dispatch({
                type: GRAB_SMURF_SUCCESS,
                payload: res.data
            })
        })
        .catch( ({error}) => {
            dispatch({
                type: GRAB_SMURF_FAILURE,
                payload: error
            })
        })
}