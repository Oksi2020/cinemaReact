import { 
    WRITE_HALL_CONFIG,
    UPDATE_PRICE,
    ADD_TO_ACTIVE,
    REMOVE_FROM_ACTIVE,
    CLEAR_ACTIVE
} from '../constants';

import { generateConfig } from '../helpers/generateConfig';
import { loadState, saveState } from '../helpers/localStorage';

export const saveHallConfig = (data) => (dispatch) => {
    dispatch({ type:WRITE_HALL_CONFIG, payload: data})
}

export const initHallData = () => ( dispatch ) => {
    const preloadedData = loadState('first-hall');
    if( preloadedData ){
        dispatch( saveHallConfig(preloadedData) );
    } else {
        let hall = generateConfig(10);
        dispatch( saveHallConfig(hall) );
    }
}

const changeSeatStatus = ( id ) => ( dispatch, getState ) => {
    const hall = getState().hallConfig;
    let updatedHall = hall.map( item=> {
        item.seats.map(seat=> {
            if(seat.id == id ){
                seat.active = !seat.active;
                if( seat.active ){
                    dispatch({ type: ADD_TO_ACTIVE, payload: seat });
                } else {
                    dispatch({ type: REMOVE_FROM_ACTIVE, payload: seat });
                }
            }
            return seat;
        })
        return item;
    });
    dispatch( saveHallConfig(updatedHall) );
}

const CalcSelectedTicketsPrice = ( dispatch, getState ) => {
    const hall = getState().hallConfig;

    const finalPrice = hall.reduce( ( sum, current ) => {  
        let rowSum = current.seats.reduce( ( row_sum, seat ) => {
            let sum = 0;
            if( seat.active ){
                sum += seat.price;
            }
            return row_sum + sum;
        }, 0 )
        return rowSum + sum;
    }, 0);

    dispatch({ type: UPDATE_PRICE, payload: finalPrice })
}

export const deleteReservedTicket = id => dispatch => {
    dispatch( changeSeatStatus(id) );
    dispatch( CalcSelectedTicketsPrice );
}

export const addToCart = ( id ) => dispatch => {    
    dispatch( changeSeatStatus(id) );
    dispatch( CalcSelectedTicketsPrice );
}


export const buyTickets = () => (dispatch, getState ) => {
    const hall = getState().hallConfig;
    let updatedHall = hall.map( item=> {
        item.seats.map(seat=> {
            if( seat.active ){
                seat.active = false;
                seat.bought = true;
            }
            return seat;
        })
        return item;
    });

    dispatch( saveHallConfig(updatedHall) );
    dispatch( CalcSelectedTicketsPrice );
    dispatch({ type: CLEAR_ACTIVE });
    saveState( updatedHall, 'first-hall' );

}


export const clearTickets = ( dispatch, getState ) => {
    const hall = getState().hallConfig;
    let updatedHall = hall.map( item=> {
        item.seats.map(seat=> {
            if( seat.active ){
                seat.active = false;
            }
            return seat;
        })
        return item;
    });
    dispatch( saveHallConfig(updatedHall) );
    dispatch({ type: CLEAR_ACTIVE });
}