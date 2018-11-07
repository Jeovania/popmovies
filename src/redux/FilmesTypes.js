export const INITIAL_STATE = {
	loading: false,
	loading_favorito: false,
	filmes: [],
	filme: {
		favorito: false,
		detalhes: []
	},
	busca: [],
	hasMore: false
}

export const FILMES_API = process.env.REACT_APP_URL_FILMES_API
export const API_KEY = process.env.REACT_APP_API_KEY
export const LOADING = 'LOADING'
export const GET_FILMES = 'GET_FILMES'
export const GET_FILME = 'GET_FILME'
export const BUSCA_FILME = 'BUSCA_FILME'
export const LOADING_FAVORITO = 'LOADING_FAVORITO'
export const TOGGLE_FAVORITO = 'TOGGLE_FAVORITO'
