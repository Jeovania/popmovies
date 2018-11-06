/* Dependencies */
import { combineReducers } from 'redux'
import { applyMiddleware, createStore } from 'redux'
import promisse from 'redux-promise'
import thunk from 'redux-thunk'

/* Reducers */
import { reducer as toastr } from 'react-redux-toastr'
import { filmes } from './redux/filmes.reducer'

const reducers = combineReducers({
	toastr,
	filmes
})

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promisse, thunk)(createStore)(reducers, devTools)

export default store
