import React, { Component } from 'react'
import { stylesPage } from '../assets/styles/Page'
import { withStyles } from '@material-ui/core/styles'
import { PropTypes } from 'prop-types'

/* Layout */
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'

class Progress extends Component {
	render() {
		const { classes, size } = this.props
		return (
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
				className={classes.progressMargin}
			>
				<CircularProgress size={size} />
			</Grid>
		)
	}
}

Progress.defaultProps = {
	size: 50
}

Progress.propTypes = {
	size: PropTypes.number
}

export default withStyles(stylesPage)(Progress)
