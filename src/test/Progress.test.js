import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from '../Store'

import Progress from '../components/Progress'

describe('Progress', () => {
	it('renderiza componente', () => {
		const div = document.createElement('div')
		ReactDOM.render(
			<Provider store={Store}>
				<Progress />
			</Provider>,
			div
		)
		ReactDOM.unmountComponentAtNode(div)
	})
})
