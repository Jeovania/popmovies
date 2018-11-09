import axios from 'axios'
import { showSnack } from 'react-redux-snackbar'
import * as types from '../redux/FilmesTypes'

/**
 * Set do status do loading da página
 * @param {boolean} status
 */
const loading = status => ({
	type: types.LOADING,
	payload: status
})

/**
 * Recupera a lista de filmes mais populares
 * @param {Object} data
 * @param {integer} page
 * @param {boolean} isLoading
 * @param {integer} page_size
 */
export const getFilmes = (data = {}, page = 1, isLoading = true) => dispatch => {
	if (isLoading) dispatch(loading(true))

	data['page'] = page
	data['api_key'] = types.API_KEY
	data['language'] = 'pt-BR'

	return axios
		.get(`${types.FILMES_API}/discover/movie?sort_by=popularity.desc`, {
			params: data
		})
		.then(response => {
			dispatch({
				type: types.GET_FILMES,
				payload: response.data,
				page: page
			})
		})
		.catch(error => {
			dispatch(
				showSnack('erro-lista-filmes', {
					label: 'Erro ao listar filmes',
					timeout: 3500
				})
			)
			dispatch(loading(false))
		})
}

/**
 * Recupera detalhes de um filme
 * @param {integer} id
 */
export const getFilme = id => async (dispatch, getState, { getFirebase, getFirestore }) => {
	dispatch(loading(true))

	await axios
		.get(
			`${types.FILMES_API}/movie/${id}?api_key=${
				types.API_KEY
			}&language=pt-BR&append_to_response=videos`
		)
		.then(response => {
			dispatch({
				type: types.GET_FILME,
				payload: response.data,
				favorito: false
			})
		})
		.catch(error => {
			dispatch(
				showSnack('erro-recuperar-filme', {
					label: 'Erro ao recuperar filme',
					timeout: 3500
				})
			)

			dispatch(loading(false))
		})
}

/**
 * Busca por filme
 * @param {string} query
 * @param {integer} page
 */
export const busca = (query, page = 1) => dispatch => {
	return axios
		.get(`${types.FILMES_API}/search/movie?query=${query}&api_key=${types.API_KEY}&language=pt-BR`)
		.then(response => {
			dispatch({
				type: types.BUSCA_FILME,
				payload: response.data.results,
				page: page
			})
		})
		.catch(error => {
			console.log(error.status_message)
			dispatch(
				showSnack('erro-buscar-filme', {
					label: 'Erro ao buscar filme',
					timeout: 3500
				})
			)
		})
}

/**
 * Favoritar filme
 * @param {integer} filmeId
 */
export const favoritar = filmeId => (dispatch, getState, { getFirebase, getFirestore }) => {
	const db = getFirestore()
	let filmeRef = db.collection('favoritos').doc(filmeId.toString())

	filmeRef
		.set({ movieId: filmeId, createdAt: new Date() })
		.then(response => {
			dispatch(
				showSnack('filme-add-fav', {
					label: 'Filme adicionado aos favoritos',
					timeout: 3500
				})
			)

			dispatch({ type: types.TOGGLE_FAVORITO, payload: true })
		})
		.catch(error => {
			dispatch({ type: types.TOGGLE_FAVORITO, payload: false })
			console.log(error)
		})
}

/**
 * Des-Favoritar filme
 * @param {integer} filmeId
 */
export const desfavoritar = filmeId => (dispatch, getState, { getFirebase, getFirestore }) => {
	const db = getFirestore()
	let filmeRef = db.collection('favoritos').doc(filmeId.toString())

	filmeRef
		.delete()
		.then(response => {
			dispatch(
				showSnack('filme-rem-fav', {
					label: 'Filme removido dos favoritos',
					timeout: 3500
				})
			)

			dispatch({ type: types.TOGGLE_FAVORITO, payload: false })
		})
		.catch(error => {
			dispatch({ type: types.TOGGLE_FAVORITO, payload: false })
			console.log(error)
		})
}

/**
 * Busca se o filme é favorito
 * @param {integer} filmeId
 */
export const getFavorito = filmeId => (dispatch, getState, { getFirebase, getFirestore }) => {
	const db = getFirestore()
	let filmeRef = db.collection('favoritos').doc(filmeId.toString())

	filmeRef
		.get()
		.then(response => {
			if (!response.exists) {
				dispatch({ type: types.GET_FAVORITO, payload: false })
			} else {
				dispatch({ type: types.GET_FAVORITO, payload: true })
			}
		})
		.catch(error => {
			dispatch({ type: types.GET_FAVORITO, payload: false })
			console.log('Erro', error)
		})
}
