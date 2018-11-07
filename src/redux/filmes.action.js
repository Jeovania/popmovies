import axios from 'axios'
import { toastr } from 'react-redux-toastr'

import * as types from '../redux/filmes.types'

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
	data['append_to_response'] = 'genres'

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
export const getFilme = id => dispatch => {
	dispatch(loading(true))

	return axios
		.get(
			`${types.FILMES_API}/movie/${id}?api_key=${
				types.API_KEY
			}&language=pt-BR&append_to_response=videos`
		)
		.then(response => {
			dispatch({
				type: types.GET_FILME,
				payload: response.data
			})
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
			console.log(response.data)
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
