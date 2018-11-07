import * as types from '../redux/FilmesTypes'

export const filmes = (state = types.INITIAL_STATE, action) => {
	switch (action.type) {
		case types.LOADING:
			return {
				...state,
				loading: action.payload,
				busca: []
			}
		case types.GET_FILMES:
			let filmes = state.filmes

			if (action.page === 1) {
				filmes = action.payload.results
			} else {
				filmes = state.filmes.concat(action.payload.results)
			}

			return {
				...state,
				loading: false,
				filmes: filmes,
				hasMore: action.page < action.payload.total_pages,
				filme: []
			}
		case types.GET_FILME:
			let filme = {}
			filme['detalhes'] = action.payload
			filme['favorito'] = action.favorito

			return {
				...state,
				filme: filme,
				loading: false
			}
		case types.BUSCA_FILME:
			return {
				...state,
				busca: action.payload
			}
		case types.TOGGLE_FAVORITO: {
			let filmeUpdate = {}
			filmeUpdate['detalhes'] = state.filme.detalhes
			filmeUpdate['favorito'] = action.payload

			return {
				...state,
				filme: filmeUpdate
			}
		}
		default:
			return state
	}
}
