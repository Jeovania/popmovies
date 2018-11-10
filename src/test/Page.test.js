import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from '../Store'

import Page from '../components/Page'

describe('Page', () => {
	it('renderiza componente', () => {
		const div = document.createElement('div')
		ReactDOM.render(
			<Provider store={Store}>
				<Page />
			</Provider>,
			div
		)
		ReactDOM.unmountComponentAtNode(div)
	})
})
