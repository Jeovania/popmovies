/* Dependencies */
import React, { Component, Fragment } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Snackbar } from 'react-redux-snackbar'

/* Components Pages */
import ListaFilmes from './paginas/ListaFilmes'
import DetalhesFilme from './paginas/DetalhesFilme'
import Favoritos from './paginas/Favoritos'
import NotFound404 from './paginas/404'

class Routes extends Component {
	render() {
		const history = createBrowserHistory()

		return (
			<Router history={history}>
				<Fragment>
					<Switch>
						<Route exact path="/" component={ListaFilmes} />
						<Route path="/detalhes/:id" component={DetalhesFilme} />
						<Route exact path="/favoritos" component={Favoritos} />

						<Route component={NotFound404} />
					</Switch>
					<Snackbar />
				</Fragment>
			</Router>
		)
	}
}

export default Routes
