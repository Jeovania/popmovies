import axios from 'axios'
import { toastr } from 'react-redux-toastr'

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
			toastr.error('Erro ao listar filmes', error.status_message)
			dispatch(loading(false))
		})
}

/**
 * Recupera detalhes de um filme
 * @param {integer} id
 */
export const getFilme = id => async (dispatch, getState, { getFirebase, getFirestore }) => {
	dispatch(loading(true))

	//const firestore = getFirestore()

	await axios
		.get(
			`${types.FILMES_API}/movie/${id}?api_key=${
				types.API_KEY
			}&language=pt-BR&append_to_response=videos`
		)
		.then(response => {
			let filme = response.data
			/* 		firestore
				.collection('favoritos')
				.get({ movieId: filme.id })
				.then(response => { */
			dispatch({
				type: types.GET_FILME,
				payload: filme,
				favorito: false
			})
			/* 	})
				.catch(error => {
					dispatch({
						type: types.GET_FILME,
						payload: filme,
						favorito: false
					})
				}) */
		})
		.catch(error => {
			toastr.error('Erro ao recuperar filme', error.status_message)
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
				payload: response.data,
				page: page
			})
		})
		.catch(error => {
			console.log(error.status_message)
			toastr.error('Erro ao buscar filme', error.status_message)
		})
}

export const favoritar = filmeId => (dispatch, getState, { getFirebase, getFirestore }) => {
	const firestore = getFirestore()
	firestore
		.collection('favoritos')
		.add({ movieId: filmeId, createdAt: new Date() })
		.then(response => {
			console.log('Favoritado')
			dispatch({ type: types.TOGGLE_FAVORITO, payload: true })
		})
		.catch(error => {
			dispatch({ type: types.TOGGLE_FAVORITO, payload: false })
			console.log(error)
		})
}

export const desfavoritar = filmeId => (dispatch, getState, { getFirebase, getFirestore }) => {
	const firestore = getFirestore()
	firestore
		.collection('favoritos')
		.add({ movieId: filmeId, createdAt: new Date() })
		.then(response => {
			console.log('Des - Favoritado')
			dispatch({ type: types.TOGGLE_FAVORITO, payload: false })
		})
		.catch(error => {
			dispatch({ type: types.TOGGLE_FAVORITO, payload: false })
			console.log(error)
		})
}
