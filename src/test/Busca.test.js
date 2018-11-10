import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from '../Store'

import Busca from '../components/Busca'

describe('Busca', () => {
	it('renderiza componente', () => {
		const div = document.createElement('div')
		ReactDOM.render(
			<Provider store={Store}>
				<Busca />
			</Provider>,
			div
		)
		ReactDOM.unmountComponentAtNode(div)
	})
})
