import { combineReducers } from 'redux';
import { WRITE_HALL_CONFIG, UPDATE_PRICE, REDUCE_TIMER, ADD_TO_ACTIVE, REMOVE_FROM_ACTIVE, CLEAR_ACTIVE } from '../constants/index';


const initState = {
    hallConfig: [],
    activeSeats: [],
    sum: 0, 
    timer: 0
}

const reduser = (state = initState, action) => {
    switch( action.type ) {
        case WRITE_HALL_CONFIG:
            return ({
                ...state,
                hallConfig: action.payload
            })
        
        case ADD_TO_ACTIVE: 
            return ({
                ...state,
                activeSeats: [...state.activeSeats, action.payload ]
            })

        case REMOVE_FROM_ACTIVE:
            return({
                ...state,
                activeSeats: state.activeSeats.filter( item => item.id !== action.payload.id )
            })

        case CLEAR_ACTIVE: 
            return({
                ...state,
                activeSeats: initState.activeSeats
            })

        case UPDATE_PRICE: 
            return ({
                ...state,
                sum: action.payload
            })

        case REDUCE_TIMER:
            console.log('hi')
            return({
                ...state,
                timer: state.timer-1
            })
            
        default:
            return state;
    }
}

export default reduser;