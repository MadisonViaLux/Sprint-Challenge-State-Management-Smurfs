import axios from 'axios'

export const GRAB_SMURF_START = "GRAB_SMURF_START"
export const GRAB_SMURF_SUCCESS = "GRAB_SMURF_SUCCESS"
export const GRAB_SMURF_FAILURE = "GRAB_SMURF_FAILURE"

export const ADDING_SMURF_START = "ADDING_SMURF_START";
export const ADDING_SMURF_SUCCESS = "ADDING_SMURF_SUCCESS";






export const getDatSmurf = () => dispatch => {
    dispatch({ type: GRAB_SMURF_START });

    return axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            // console.log('WHAT IS THIS', res.data)
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




export const addDatSmurf = values => dispatch => {
    console.log(values);
    dispatch({ type: ADDING_SMURF_START });

    return axios
        .post("http://localhost:3333/smurfs", values)
        .then(res => {
            // console.log(res);
            dispatch({
                type: ADDING_SMURF_SUCCESS, 
                payload: res.data 
            });
        })
        .catch( err => console.log(err) );
};