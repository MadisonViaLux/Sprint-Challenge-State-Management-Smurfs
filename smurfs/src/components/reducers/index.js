import {GRAB_SMURF_START,
    GRAB_SMURF_SUCCESS, 
    GRAB_SMURF_FAILURE, 
    ADDING_SMURF_START,
    ADDING_SMURF_SUCCESS} from '../actions/index'



const initialState = {
    smurfs: [],
    error: "",
    grabbingSmurf: false,
    addingSmurf: false,
    isLoading: false,
  };



export const reducer = (state = initialState, action) => {

    console.log('THIS IS THE REDUCER---', action.payload)

    switch(action.type){

        case GRAB_SMURF_START:
            return {
                ...state,
                grabbingSmurf: true,
                error: "",
                isLoading: true,
                smurfs: []
            };

            case GRAB_SMURF_SUCCESS:
                return {
                    ...state,
                    error: '',
                    grabbingSmurf: false,
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