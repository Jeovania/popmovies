import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from '../Store'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Filme from '../components/Filme'

describe('Filme', () => {
	it('renderiza componente', () => {
		const div = document.createElement('div')
		ReactDOM.render(
			<Provider store={Store}>
				<Router history={createBrowserHistory()}>
					<Filme filme={[{}]} />
				</Router>
			</Provider>,
			div
		)
		ReactDOM.unmountComponentAtNode(div)
	})
})
