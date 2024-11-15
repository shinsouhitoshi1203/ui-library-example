import reducer from './reducer.js';
import {initializeStore} from './core.js';

const { connect, attach, dispatch } = initializeStore(reducer);

export { connect, attach, dispatch };
