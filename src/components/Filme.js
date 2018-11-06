import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import StarIcon from '@material-ui/icons/Star'

const styles = theme => ({
	card: {
		display: 'flex'
	},
	details: {
		display: 'flex',
		flexDirection: 'column'
	},
	content: {
		flex: '1 0 auto',
		align: 'left'
	},
	cover: {
		width: 151
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: theme.spacing.unit,
		paddingBottom: theme.spacing.unit
	}
})

class Filme extends Component {
	render() {
		const { classes, id, poster_path, title } = this.props

		console.log(this.props)

		return (
			<Grid item md={isMobile ? 12 : 4} sm={isMobile ? 12 : 4} xs={12}>
				<Card className={classes.card}>
					<CardActionArea component={Link} to={`/detalhes/${id}`} className={classes.details}>
						<CardContent className={classes.content}>
							<Typography component="h6" variant="h6">
								{title}
							</Typography>
							<Typography variant="subtitle1" color="textSecondary">
								Mac Miller
							</Typography>
							<div className={classes.controls}>
								<IconButton aria-label="Previous">
									<StarIcon />
								</IconButton>
								<IconButton aria-label="Play/pause">
									<StarIcon />
								</IconButton>
								<IconButton aria-label="Next">
									<StarIcon />
								</IconButton>
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

export default withStyles(styles)(Filme)
