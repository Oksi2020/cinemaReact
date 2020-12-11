import { combineReducers } from 'redux';
import { WRITE_HALL_CONFIG, ADD_TO_CART, DELETE_FROM_CART, BUY_TICKETS } from '../constants/index';


const initState = {
    hallConfig: [],
    sum: 0, 
    timer: 0
}

let newSum = 0;

const reduser = (state = initState, action) => {
    switch( action.type ) {
        case WRITE_HALL_CONFIG:
            return ({
                ...state,
                hallConfig: action.payload
            })
        case ADD_TO_CART:
            return({
                ...state,
                hallConfig: state.hallConfig.map(item=>{item.seats.map(seat=> {
                    if(seat.id==action.payload){
                        seat.active = true;
                        newSum+=seat.price;
                        console.log(seat.price);
                    }
                    return seat;
                    })
                return item;
                }),
                sum:newSum,
                timer: 60
        })
        case DELETE_FROM_CART:
            return({
                ...state,
                hallConfig: state.hallConfig.map(item=>{
                    item.seats.map(seat=> {
                        if(seat.id==action.payload){
                            seat.active = false
                            newSum-=seat.price;
                        }
                        return seat;
                    })
                    return item;
                }),
            sum: newSum
        })
        case BUY_TICKETS: 

        return({
            ...state,
            hallConfig: state.hallConfig.map(item=>{
                item.seats.map(seat=> {
                    if(seat.active===true){
                        seat.active = false;
                        seat.bought = true;
                        newSum=0;
                    }
                    return seat;
                })
                return item;
            }),
        sum: newSum
        })
        default:
            return state;
    }
}

export default reduser;