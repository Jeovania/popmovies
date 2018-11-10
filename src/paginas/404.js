import React, { Component, Fragment } from 'react'
import Navbar from '../components/Navbar'
import Page from '../components/Page'
import ErrorMessage from '../components/ErrorMessage'

import FindInPageIcon from '@material-ui/icons/FindInPage'

class NotFound404 extends Component {
	render() {
		return (
			<Fragment>
				<Navbar back={true} backUrl="/" />

				<Page>
					<ErrorMessage
						title="Página não encontrada"
						subtitle="Volte para a página inicial"
						icon={<FindInPageIcon fontSize="inherit" />}
						standalone
					/>
				</Page>
			</Fragment>
		)
	}
}

export default NotFound404
