import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from '../Store'

import ErrorMessage from '../components/ErrorMessage'

describe('ErrorMessage', () => {
	it('renderiza componente', () => {
		const div = document.createElement('div')
		ReactDOM.render(
			<Provider store={Store}>
				<ErrorMessage />
			</Provider>,
			div
		)
		ReactDOM.unmountComponentAtNode(div)
	})
})
