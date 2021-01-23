import { Provider } from 'react-redux';

import Hall from '../Hall/Hall';
import store from '../../redux/store';

const App = () => {
    return(
        <Provider store={store}>
            <Hall />
        </Provider>
    )
} 

export default App;