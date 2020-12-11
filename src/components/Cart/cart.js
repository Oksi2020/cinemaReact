import { useSelector, useDispatch } from 'react-redux';

import { BUY_TICKETS } from '../../constants/index'
import Ticket from '../Ticket/ticket'

import './cart.css';


const Cart = () => {
    let hallConfig = useSelector(state => state.hallConfig);
    let sum = useSelector(state => state.sum);
    let timer = useSelector(state => state.timer);
    let dispatch=useDispatch();
    console.log('timer', timer)
    return(
        <div className = 'cart'>
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
                type = 'button'
                className = 'addToCart'
                onClick = {()=>{
                    dispatch({type:BUY_TICKETS})
                }}
            >
                Додати до кошика {sum} грн
            </button>
            <div className = 'timer'>
                {
                    timer ? (`00:${timer}`):''
                }
            </div>
        </div>
    )
}

export default Cart;