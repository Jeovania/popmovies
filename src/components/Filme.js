import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { PropTypes } from 'prop-types'

import { stylesFilme } from '../assets/styles/Filme'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import StarIcon from '@material-ui/icons/Star'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'

class Filme extends Component {
	render() {
		const { classes, filme } = this.props

		return (
			<Grid item md={isMobile ? 12 : 4} sm={isMobile ? 12 : 6} xs={12}>
				<Card className={classes.card} square={isMobile}>
					<CardActionArea component={Link} to={`/detalhes/${filme.id}`} className={classes.details}>
						<CardContent className={classes.content}>
							<Typography component="h6" variant="h6">
								{filme.title}
							</Typography>
							<Typography variant="subtitle1" color="textSecondary">
								{filme.release_date && filme.release_date.substring(0, 4)}
							</Typography>
							<div className={classes.controls}>
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
								/>
							</div>
						</CardContent>
					</CardActionArea>
					<CardMedia
						className={classes.cover}
						image={`https://image.tmdb.org/t/p/w185/${filme.poster_path}`}
						title={filme.title}
					/>
				</Card>
			</Grid>
		)
	}
}

Filme.propTypes = {
	filme: PropTypes.array.isRequired,
	classes: PropTypes.object.isRequired
}

export default withStyles(stylesFilme)(Filme)
