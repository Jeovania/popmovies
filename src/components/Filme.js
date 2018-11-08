import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'

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
		const { classes, id, poster_path, title, release_date, vote_average, popularity } = this.props

		return (
			<Grid item md={isMobile ? 12 : 4} sm={isMobile ? 12 : 4} xs={12}>
				<Card className={classes.card} square={isMobile}>
					<CardActionArea component={Link} to={`/detalhes/${id}`} className={classes.details}>
						<CardContent className={classes.content}>
							<Typography component="h6" variant="h6">
								{title}
							</Typography>
							<Typography variant="subtitle1" color="textSecondary">
								{release_date && release_date.substring(0, 4)}
							</Typography>
							<div className={classes.controls}>
								<Chip
									avatar={
										<Avatar>
											<StarIcon />
										</Avatar>
									}
									label={vote_average}
									color="secondary"
								/>
								<Chip
									avatar={
										<Avatar>
											<ThumbUpIcon />
										</Avatar>
									}
									label={popularity}
									color="secondary"
								/>
							</div>
						</CardContent>
					</CardActionArea>
					<CardMedia
						className={classes.cover}
						image={`https://image.tmdb.org/t/p/w185/${poster_path}`}
						title={title}
					/>
				</Card>
			</Grid>
		)
	}
}

export default withStyles(stylesFilme)(Filme)
