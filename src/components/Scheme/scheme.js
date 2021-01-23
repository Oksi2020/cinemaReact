import { useSelector, useDispatch } from 'react-redux';

import Row from '../Row/row'

import screenImg from '../../assets/img/screen.png';
import './scheme.css';


const Scheme = () => {
    const config = useSelector(state => state.hallConfig);
    return(
        <div className='scheme'>
            <img src = {screenImg}></img>
            <div className = 'config'>
                {
                    config.map(row => {
                        return (
                            <Row
                                key = {row.id} 
                                seatsConfig = { row.seats }
                            />
                        )
                    })
                }
            </div>
        </div> 
    )
}

export default Scheme;