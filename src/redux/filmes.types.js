export const INITIAL_STATE = {
	loading: false,
	loading_favorito: false,
	filmes: [],
	filme: [],
	busca: [],
	hasMore: false
}

export const FIREBASE_DB_CONFIG = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
}

export const FILMES_API = process.env.REACT_APP_URL_FILMES_API
export const API_KEY = process.env.REACT_APP_API_KEY
export const LOADING = 'LOADING'
export const LOADING_FAVORITO = 'LOADING_FAVORITO'
export const GET_FILMES = 'GET_FILMES'
export const GET_FILME = 'GET_FILME'
export const BUSCA_FILME = 'BUSCA_FILME'
