import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { isMobile } from 'react-device-detect'

import { getFavoritos } from '../redux/FilmesAction'

/* Components */
import Navbar from '../components/Navbar'
import Page from '../components/Page'
import Filme from '../components/Filme'
import ErrorMessage from '../components/ErrorMessage'
import Progress from '../components/Progress'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import Grid from '@material-ui/core/Grid'

class Favoritos extends Component {
	state = {
		page: 1,
		data: {}
	}

	componentDidMount() {
		this.props.getFavoritos({}, this.state.page)
		document.title = 'Filmes Favoritos'
	}

	render() {
		const { filmes, isLoading } = this.props

		return (
			<Fragment>
				<Navbar titulo="Favoritos" />

				<Page list>
					{isLoading ? (
						<Progress standalone />
					) : filmes.length > 0 ? (
						<Grid container direction="row" spacing={isMobile ? 0 : 8}>
							{filmes.map((filme, index) => <Filme key={index} filme={filme} />)}
						</Grid>
					) : (
						<ErrorMessage
							title="Não há filmes para mostrar"
							subtitle="Tente novamente mais tarde ou faça uma busca"
							icon={<VideoLibraryIcon fontSize="inherit" />}
							standalone
						/>
					)}
				</Page>
			</Fragment>
		)
	}
}

const mapStateToPros = ({ filmes }) => ({
	isLoading: filmes.loading,
	filmes: filmes.favoritos
})

const mapDispatchToProps = dispatch => bindActionCreators({ getFavoritos }, dispatch)

export default connect(mapStateToPros, mapDispatchToProps)(Favoritos)
