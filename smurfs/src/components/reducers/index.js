import {GRAB_SMURF_START, GRAB_SMURF_SUCCESS, GRAB_SMURF_FAILURE} from '../actions/index'



const initialState = {
    error: "",
    isLoading: false,
    name: "",
    age: "",
    height: ""
  };



export const reducer = (state = initialState, action) => {

    console.log('THIS IS THE REDUCER---', action)

    switch(action.type){

        case GRAB_SMURF_START:
            return {
                ...state,
                isLoading: true
            };

            case GRAB_SMURF_SUCCESS:
                return {
                    ...state,
                    error: '',
                    isLoading: false,
                    name: action.payload.name,
                    age: action.payload.age,
                    height: action.payload.height
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