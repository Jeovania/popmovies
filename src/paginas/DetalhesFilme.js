import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { isMobile } from 'react-device-detect'
import CurrencyFormat from 'react-currency-format'
import DocumentTitle from 'react-document-title'

import { getFilme, resetFilme, getFavorito, favoritar, desfavoritar } from '../redux/FilmesAction'

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
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import StarIcon from '@material-ui/icons/Star'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import RestorePageIcon from '@material-ui/icons/RestorePage'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'

class DetalhesFilme extends Component {
	state = {
		filmeId: null
	}

	componentDidMount() {
		const { id } = this.props.match.params
		this.props.getFilme(this.props.match.params.id)
		this.props.getFavorito(this.props.match.params.id)
		this.setState({ filmeId: id })
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.match.params.id !== this.state.filmeId) {
			this.props.getFilme(nextProps.match.params.id)
			this.setState({ filmeId: nextProps.match.params.id })
		}
	}

	componentWillUnmount() {
		this.props.resetFilme()
	}

	static propTypes = {
		match: PropTypes.object.isRequired
	}

	render() {
		const { isFav, filme, isLoading, classes } = this.props

		return (
			<DocumentTitle title={(filme && filme.title) || 'Filme'}>
				<Fragment>
					<Navbar hasTabs={true} back={true} backUrl="/" />

					<Page noMargin>
						{isLoading ? (
							<Progress standalone />
						) : filme ? (
							<Fragment>
								<div
									className={classes.cover}
									style={{
										backgroundImage: `url(https://image.tmdb.org/t/p/${
											isMobile ? 'w780' : 'w1280'
										}/${filme.backdrop_path})`
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
													filme.poster_path
												}`}
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

											<div className={classes.acoes}>
												{filme.genres &&
													filme.genres.map(genero => (
														<Chip key={genero.id} label={genero.name} className={classes.tag} />
													))}

												<Chip
													avatar={
														<Avatar>
															<StarIcon />
														</Avatar>
													}
													label={filme.vote_average}
													color="secondary"
													className={classes.tag}
												/>

												<Chip
													avatar={
														<Avatar>
															<ThumbUpIcon />
														</Avatar>
													}
													label={filme.popularity}
													color="secondary"
													className={classes.tag}
												/>

												{isFav ? (
													<Button
														variant="fab"
														aria-label="Desfazer Favorito"
														color="secondary"
														onClick={() => this.props.desfavoritar(filme.id)}
													>
														<StarIcon />
													</Button>
												) : (
													<Button
														variant="fab"
														aria-label="Favoritar"
														color="default"
														onClick={() => this.props.favoritar(filme)}
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
												<ListItemText primary="Situação:" secondary={filme.status} />
											</ListItem>
											<ListItem divider>
												<ListItemText
													primary="Orçamento:"
													secondary={
														<CurrencyFormat
															value={filme.budget}
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
															value={filme.revenue}
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
														<a href={`${filme.homepage}`} target="_blank" rel="noopener noreferrer">
															{filme.homepage}
														</a>
													}
												/>
											</ListItem>
											<ListItem divider>
												<ListItemText primary="Duração:" secondary={`${filme.runtime} min`} />
											</ListItem>
											<ListItem>
												<ListItemText primary="Titulo original:" secondary={filme.original_title} />
											</ListItem>
										</List>
									</Grid>
									<Grid item md={7} sm={12} xs={12} className={classes.videoWrapper}>
										<Typography variant="h5" gutterBottom>
											Vídeos
										</Typography>
										<Divider className={classes.divider} />

										{filme.videos && filme.videos.results.length > 0 ? (
											filme.videos.results.map(video => (
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
								standalone
							/>
						)}
					</Page>
				</Fragment>
			</DocumentTitle>
		)
	}
}

const mapStateToPros = ({ filmes }) => ({
	isLoading: filmes.loading,
	filme: filmes.filme,
	isFav: filmes.favorito
})

const mapDispatchToProps = dispatch =>
	bindActionCreators({ getFilme, resetFilme, getFavorito, favoritar, desfavoritar }, dispatch)

export default connect(mapStateToPros, mapDispatchToProps)(
	withStyles(stylesDetalhes)(DetalhesFilme)
)
