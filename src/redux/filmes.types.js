export const INITIAL_STATE = {
	loading: false,
	loading_favorito: false,
	filmes: [],
	filme: [],
	busca: [],
	hasMore: false
}

export const FIREBASE_DB_CONFIG = {
	apiKey: 'AIzaSyAnGMr2a9R6wvhDH4a_MA4RdiCJ_p1RpcQ',
	authDomain: 'popmovies-311ce.firebaseapp.com',
	databaseURL: 'https://popmovies-311ce.firebaseio.com',
	projectId: 'popmovies-311ce',
	storageBucket: 'popmovies-311ce.appspot.com',
	messagingSenderId: '1049034053659'
}

export const FILMES_API = process.env.REACT_APP_URL_FILMES_API
export const API_KEY = process.env.REACT_APP_API_KEY
export const LOADING = 'LOADING'
export const LOADING_FAVORITO = 'LOADING_FAVORITO'
export const GET_FILMES = 'GET_FILMES'
export const GET_FILME = 'GET_FILME'
export const BUSCA_FILME = 'BUSCA_FILME'
