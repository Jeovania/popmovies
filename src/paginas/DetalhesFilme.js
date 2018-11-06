import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { isMobile } from 'react-device-detect'

import { getFilme, favoritarFilme } from '../redux/filmes.action'

/* Components */
import Navbar from '../components/Navbar'
import Page from '../components/Page'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import StarIcon from '@material-ui/icons/Star'

class DetalhesFilme extends Component {
	componentDidMount() {
		const { id } = this.props.match.params
		this.props.getFilme(id)
		document.title = this.props.filme.title
	}

	static propTypes = {
		match: PropTypes.object.isRequired
	}

	render() {
		const { filme, isLoading } = this.props

		return (
			<Fragment>
				<Navbar titulo={filme.title || ''} hasTabs={true} back={true} backUrl="/" />
				<Page list={true}>
					{isLoading ? (
						<CircularProgress />
					) : (
						<Grid
							container
							direction="row"
							style={{
								backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${filme.backdrop_path})`,
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover',
								color: '#fff'
							}}
						>
							<Grid item md={3} sm={3} xs={12}>
								<img
									src={`https://image.tmdb.org/t/p/w342/${filme.poster_path}`}
									alt={filme.title}
								/>
							</Grid>
							<Grid item md={9} sm={9} xs={12}>
								<Typography variant={isMobile ? 'h5' : 'h4'} color="inherit">
									{filme.title}
								</Typography>
								<Typography variant="h6" color="inherit">
									Sumário:
								</Typography>
								<Typography variant="body2" color="inherit">
									{filme.overview}
								</Typography>
								<Button variant="fab" aria-label="Favoritar" color="default">
									<StarIcon />
								</Button>
							</Grid>
						</Grid>
					)}
				</Page>
			</Fragment>
		)
	}
}

const mapStateToPros = ({ filmes }) => ({
	isLoading: filmes.loading,
	filme: filmes.filme
})

const mapDispatchToProps = dispatch => bindActionCreators({ getFilme, favoritarFilme }, dispatch)

export default connect(mapStateToPros, mapDispatchToProps)(DetalhesFilme)
