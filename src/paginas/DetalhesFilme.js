import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { isMobile } from 'react-device-detect'
import CurrencyFormat from 'react-currency-format'

import { getFilme, favoritar, desfavoritar } from '../redux/FilmesAction'

/* Components */
import Navbar from '../components/Navbar'
import Page from '../components/Page'
import Progress from '../components/Progress'
import ErrorMessage from '../components/ErrorMessage'

import { stylesDetalhes } from '../assets/styles/Detalhes'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import StarIcon from '@material-ui/icons/Star'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import RestorePageIcon from '@material-ui/icons/RestorePage'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
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

	toggleFavorito = data => {
		console.log(data)
	}

	render() {
		const { filme, isLoading, classes } = this.props

		console.log(filme.detalhes)

		return (
			<Fragment>
				<Navbar hasTabs={true} back={true} backUrl="/" />

				<Page noMargin>
					{isLoading ? (
						<Progress />
					) : filme.detalhes ? (
						<Fragment>
							<div
								className={classes.cover}
								style={{
									backgroundImage: `url(https://image.tmdb.org/t/p/${isMobile ? 'w780' : 'w1280'}/${
										filme.detalhes.backdrop_path
									})`
								}}
							>
								<div className={classes.filter} />
								<Grid
									container
									direction="row"
									alignItems="center"
									justify="center"
									className={classes.coverContent}
								>
									<Grid item md={3} sm={3} xs={12} className={classes.posterWrapper}>
										<img
											src={`https://image.tmdb.org/t/p/${isMobile ? 'w185' : 'w342'}/${
												filme.detalhes.poster_path
											}`}
											alt={filme.detalhes.title}
											className={classes.poster}
										/>
									</Grid>
									<Grid item md={9} sm={9} xs={12} className={classes.content}>
										<Typography variant={isMobile ? 'h5' : 'h3'} color="inherit" gutterBottom>
											{filme.detalhes.title} ({filme.detalhes.release_date &&
												filme.detalhes.release_date.substring(0, 4)})
										</Typography>
										<Typography variant="h6" color="inherit">
											Sumário:
										</Typography>
										<Typography variant="body2" color="inherit">
											{filme.detalhes.overview}
										</Typography>

										<div className={classes.acoes}>
											{filme.detalhes.genres &&
												filme.detalhes.genres.map(genero => (
													<Chip key={genero.id} label={genero.name} />
												))}

											<Chip
												avatar={
													<Avatar>
														<StarIcon />
													</Avatar>
												}
												label={filme.detalhes.vote_average}
												color="secondary"
											/>

											<Chip
												avatar={
													<Avatar>
														<ThumbUpIcon />
													</Avatar>
												}
												label={filme.detalhes.popularity}
												color="secondary"
											/>

											{filme.favorito ? (
												<Button
													variant="fab"
													aria-label="Desfazer Favorito"
													color="secondary"
													onClick={() => this.props.desfavoritar(filme.detalhes.id)}
												>
													<StarIcon />
												</Button>
											) : (
												<Button
													variant="fab"
													aria-label="Favoritar"
													color="default"
													onClick={() => this.props.favoritar(filme.detalhes.id)}
												>
													<StarIcon />
												</Button>
											)}
										</div>
									</Grid>
								</Grid>
							</div>

							<Grid container direction="row-reverse">
								<Grid item md={5} sm={12} xs={12}>
									<List>
										<ListItem divider>
											<ListItemText primary="Detalhes" />
										</ListItem>
										<ListItem divider>
											<ListItemText primary="Situação:" secondary={filme.detalhes.status} />
										</ListItem>
										<ListItem divider>
											<ListItemText
												primary="Orçamento:"
												secondary={
													<CurrencyFormat
														value={filme.detalhes.budget}
														displayType={'text'}
														thousandSeparator={true}
														prefix={'$'}
													/>
												}
											/>
										</ListItem>
										<ListItem divider>
											<ListItemText
												primary="Receita:"
												secondary={
													<CurrencyFormat
														value={filme.detalhes.revenue}
														displayType={'text'}
														thousandSeparator={true}
														prefix={'$'}
													/>
												}
											/>
										</ListItem>
										<ListItem divider>
											<ListItemText
												primary="Website:"
												secondary={
													<a
														href={`${filme.detalhes.homepage}`}
														target="_blank"
														rel="noopener noreferrer"
													>
														{filme.detalhes.homepage}
													</a>
												}
											/>
										</ListItem>
										<ListItem divider>
											<ListItemText
												primary="Duração:"
												secondary={`${filme.detalhes.runtime} min`}
											/>
										</ListItem>
										<ListItem>
											<ListItemText
												primary="Titulo original:"
												secondary={filme.detalhes.original_title}
											/>
										</ListItem>
									</List>
								</Grid>
								<Grid item md={7} sm={12} xs={12} className={classes.videoWrapper}>
									<Typography variant="h5" gutterBottom>
										Vídeos
									</Typography>
									<Divider className={classes.divider} />

									{filme.detalhes.videos && filme.detalhes.videos.results.length > 0 ? (
										filme.detalhes.videos.results.map(video => (
											<div className={classes.videoResponsive} key={video.key}>
												<iframe
													title={video.name}
													width="560"
													height="315"
													src={`https://www.youtube.com/embed/${video.key}`}
													frameBorder="0"
													allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
													allowFullScreen
													className={classes.iframe}
												/>
											</div>
										))
									) : (
										<ErrorMessage
											title="Não há vídeos para esse filme"
											icon={<VideoLibraryIcon fontSize="inherit" />}
										/>
									)}
								</Grid>
							</Grid>
						</Fragment>
					) : (
						<ErrorMessage
							title="Erro ao carregar detalhes do filme"
							subtitle="Tente recarregar a página"
							icon={<RestorePageIcon fontSize="inherit" />}
						/>
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

const mapDispatchToProps = dispatch =>
	bindActionCreators({ getFilme, favoritar, desfavoritar }, dispatch)

export default connect(mapStateToPros, mapDispatchToProps)(
	withStyles(stylesDetalhes)(DetalhesFilme)
)
