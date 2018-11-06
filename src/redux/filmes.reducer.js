import * as types from '../redux/filmes.types'

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
			return {
				...state,
				filme: action.payload,
				loading: false
			}
		case types.BUSCA_FILME:
			return {
				...state,
				busca: action.payload
			}
		case types.LOADING_FAVORITO:
			return {
				...state,
				loading_favorito: true
			}
		default:
			return state
	}
}
