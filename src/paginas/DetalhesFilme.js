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
import Chip from '@material-ui/core/Chip'
import StarIcon from '@material-ui/icons/Star'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

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

		console.log(filme)

		return (
			<Fragment>
				<Navbar
					titulo={
						`${filme.title} (${filme.release_date && filme.release_date.substring(0, 4)})` || ''
					}
					hasTabs={true}
					back={true}
					backUrl="/"
				/>
				<Page list={true}>
					{isLoading ? (
						<CircularProgress />
					) : (
						<Fragment>
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
										{filme.title} ({filme.release_date && filme.release_date.substring(0, 4)})
									</Typography>
									<Typography variant="h6" color="inherit">
										Sumário:
									</Typography>
									<Typography variant="body2" color="inherit">
										{filme.overview}
									</Typography>

									{filme.genres &&
										filme.genres.map(genero => <Chip key={genero.id} label={genero.name} />)}

									<Button variant="fab" size="small" aria-label="Favoritar" color="default">
										<StarIcon />
									</Button>
								</Grid>
							</Grid>

							<Grid container direction="row">
								<Grid item md={8} sm={12} xs={12} />
								<Grid item md={4} sm={12} xs={12}>
									<List>
										<ListItem divider>
											<ListItemText primary="Situação:" secondary={filme.status} />
										</ListItem>
										<ListItem divider>
											<ListItemText primary="Orçamento:" secondary={filme.budget} />
										</ListItem>
									</List>
								</Grid>
							</Grid>
						</Fragment>
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
