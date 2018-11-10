import React, { Component } from 'react'
import { stylesPage } from '../assets/styles/Page'
import { withStyles } from '@material-ui/core/styles'
import { PropTypes } from 'prop-types'

/* Layout */
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'

class Progress extends Component {
	render() {
		const { classes, size, standalone } = this.props
		const wrapperClass = standalone ? classes.progressStandalone : null

		return (
			<div className={wrapperClass}>
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="center"
					className={classes.progressMargin}
				>
					<CircularProgress size={size} />
				</Grid>
			</div>
		)
	}
}

Progress.defaultProps = {
	size: 50,
	standalone: false
}

Progress.propTypes = {
	size: PropTypes.number.isRequired,
	standalone: PropTypes.bool.isRequired,
	classes: PropTypes.object.isRequired
}

export default withStyles(stylesPage)(Progress)
