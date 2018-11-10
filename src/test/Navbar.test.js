import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from '../Store'

import Navbar from '../components/Navbar'

describe('Navbar', () => {
	it('renderiza componente', () => {
		const div = document.createElement('div')
		ReactDOM.render(
			<Provider store={Store}>
				<Navbar />
			</Provider>,
			div
		)
		ReactDOM.unmountComponentAtNode(div)
	})
})
