import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { time } from 'uniqid';

import Ticket from '../Ticket/ticket'

import { buyTickets, clearTickets } from '../../actions';

import './cart.css';

const TICK_INTERVAL = 300;
const START_COUNT = 20;

const Cart = () => {

    let dispatch=useDispatch();
    let hallConfig = useSelector(state => state.hallConfig);
    let active = useSelector( state => state.activeSeats);
    let sum = useSelector(state => state.sum);
    let timer;
    const [counter, setCounter] = useState(START_COUNT);
    const [prevActive, setActive] = useState(active.length);

    const buyHandler = () => {
        dispatch( buyTickets() );
    }

    useEffect(() => {
        if( active.length > 0 ){
            timer = setInterval( () => {
                setCounter( counter - 1);
            }, TICK_INTERVAL );
        }
        
        if( counter <= 0 ){
            dispatch( clearTickets )
            clearInterval( timer );
            setCounter( START_COUNT );
        }
        if( active.length !== prevActive ){
            setCounter( START_COUNT );
        }

        setActive( active.length )


        return () => {
            clearInterval( timer );
        }
    }, [counter, active.length])


    return(
        <div className = 'cart'>
            {
                active.length > 0 && ( <h2>{counter}</h2>)
            }

            {
                hallConfig.map(item => {
                    return item.seats.map(seat => {
                        if(seat.active===true) {
                            return (
                                <Ticket
                                    key={ seat.id }
                                    id={ seat.id }
                                    number={seat.number}
                                    row={ seat.row }
                                    sum={ seat.price }
                                />
                            )
                        }
                    })
                })
            }
            <button 
                type='button'
                className='addToCart'
                onClick={buyHandler}
            >
                Додати до кошика {sum} грн
            </button>
        </div>
    )
}

export default Cart;