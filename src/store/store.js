import {
    legacy_createStore as createStore,
	combineReducers,
	applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import productCardsStore from './productCards/cards.reducer';

const rootReducer = combineReducers({
    productCardsStore
}); 

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;