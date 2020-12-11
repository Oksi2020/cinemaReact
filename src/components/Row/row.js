import PropTypes from 'prop-types';

import Place from '../Place/place'
import './row.css';

const Row = ({ seatsConfig }) => {
    return(
        <div className = 'row'>
            {
                seatsConfig.map(seat => (
                    <Place 
                        key = { seat.id }
                        id={ seat.id }
                        className = { seat.active ? 'place active': (seat.bought?'place passive':'place' )}
                        active = { seat.active }
                        bought = { seat.bought }
                    >
                        {seat.number}
                    </Place>
                ))
            }
        </div>
    )
}

Row.propTypes = {
    seatsConfig: PropTypes.object
}

export default Row;