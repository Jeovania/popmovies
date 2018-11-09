/* Dependencies */
import React, { Component, Fragment } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

/* Components Pages */
import ListaFilmes from './paginas/ListaFilmes'
import DetalhesFilme from './paginas/DetalhesFilme'
import NotFound404 from './paginas/404'

import Messages from './components/Messages'

class Routes extends Component {
	render() {
		const history = createBrowserHistory()

		return (
			<Router history={history}>
				<Fragment>
					<Switch>
						<Route exact path="/" component={ListaFilmes} />
						<Route exact path="/detalhes/:id" component={DetalhesFilme} />

						<Route component={NotFound404} />
					</Switch>
					<Messages />
				</Fragment>
			</Router>
		)
	}
}

export default Routes
