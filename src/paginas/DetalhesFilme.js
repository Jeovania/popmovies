import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { isMobile } from 'react-device-detect'

import { getFilme } from '../redux/filmes.action'
import { favoritosRef } from '../redux/firebase'

/* Components */
import Navbar from '../components/Navbar'
import Page from '../components/Page'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Chip from '@material-ui/core/Chip'
import StarIcon from '@material-ui/icons/Star'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const styles = theme => ({
	cover: {
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		color: '#fff',
		position: 'relative',
		zIndex: 0,
		padding: theme.spacing.unit * 3,
		'&:before': {
			content: '',
			backgroundColor: '#000',
			position: 'absolute',
			zIndex: 3,
			opacity: 0.6,
			top: 0,
			bottom: 0,
			right: 0,
			left: 0
		}
	},
	poster: {
		boxShadow: theme.shadows[8]
	},
	content: {
		paddingLeft: theme.spacing.unit * 5,
		paddingRight: theme.spacing.unit * 5
	}
})

class DetalhesFilme extends Component {
	componentDidMount() {
		const { id } = this.props.match.params
		this.props.getFilme(id)
		document.title = this.props.filme.title
	}

	static propTypes = {
		match: PropTypes.object.isRequired
	}

	toggleFavorito = data => {
		try {
			favoritosRef.set(data)
		} catch (error) {
			console.log(error)
		}
	}

	render() {
		const { filme, isLoading, classes } = this.props

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
								className={classes.cover}
								style={{
									backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${filme.backdrop_path})`
								}}
							>
								<Grid item md={3} sm={3} xs={12}>
									<img
										src={`https://image.tmdb.org/t/p/w342/${filme.poster_path}`}
										alt={filme.title}
										className={classes.poster}
									/>
								</Grid>
								<Grid item md={9} sm={9} xs={12} className={classes.content}>
									<Typography variant={isMobile ? 'h5' : 'h3'} color="inherit" gutterBottom>
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

									<Button
										variant="fab"
										size="small"
										aria-label="Favoritar"
										color="default"
										onClick={() => this.toggleFavorito({ id: filme.id })}
									>
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

const mapDispatchToProps = dispatch => bindActionCreators({ getFilme }, dispatch)

export default connect(mapStateToPros, mapDispatchToProps)(withStyles(styles)(DetalhesFilme))
