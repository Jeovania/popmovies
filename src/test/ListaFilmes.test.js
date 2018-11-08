import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ListaFilmes from '../paginas/ListaFilmes'
import Store from '../Store'

it('renderiza sem quebrar', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<Provider store={Store}>
			<ListaFilmes />
		</Provider>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})
