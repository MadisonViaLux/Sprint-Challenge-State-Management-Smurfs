import {GRAB_SMURF_START, GRAB_SMURF_SUCCESS, GRAB_SMURF_FAILURE} from '../actions/index'



const initialState = {
    smurfs: [],
    error: "",
    isLoading: false,
  };



export const reducer = (state = initialState, action) => {

    console.log('THIS IS THE REDUCER---', action.payload)

    switch(action.type){

        case GRAB_SMURF_START:
            return {
                ...state,
                error: 'you done messed up your code A-A-ron',
                isLoading: true,
            };

            case GRAB_SMURF_SUCCESS:
                return {
                    ...state,
                    error: '',
                    isLoading: false,
                    smurfs: action.payload
                }

            case GRAB_SMURF_FAILURE:
                return {
                    ...state,
                    error: 'you done messed up your code A-A-ron',
                    isLoading: false, 
                }

            default: return state;

    }
}