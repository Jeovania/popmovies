/* Dependencies */
import { combineReducers } from 'redux'
import { applyMiddleware, createStore, compose } from 'redux'
import promisse from 'redux-promise'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'

/* Reducers */
import { snackbarReducer as snackbar } from 'react-redux-snackbar'
import { filmes } from './redux/FilmesReducer'

import firebaseConfig from './redux/FirebaseService'

const reducers = combineReducers({
	snackbar,
	filmes
})

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = compose(
	applyMiddleware(promisse, thunk.withExtraArgument({ getFirebase, getFirestore })),
	reduxFirestore(firebaseConfig),
	reactReduxFirebase(firebaseConfig)
)(createStore)(reducers, devTools)

export default store
