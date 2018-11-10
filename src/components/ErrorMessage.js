import React from 'react'
import { PropTypes } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { stylesErrorMessage } from '../assets/styles/ErrorMesssage'

const ErrorMessage = ({ title, subtitle, icon, children, classes, standalone }) => (
	<div className={standalone ? classes.standalone : classes.spacing}>
		<Grid container direction="column" align="center" justify="center">
			{icon && (
				<Typography variant="h1" color="textSecondary" align="center">
					{icon}
				</Typography>
			)}
			<Typography variant="h5" color="textSecondary" align="center">
				{title}
			</Typography>

			{subtitle && (
				<Typography variant="subtitle1" color="textSecondary" align="center">
					{subtitle}
				</Typography>
			)}
			{children}
		</Grid>
	</div>
)

ErrorMessage.defaultProps = {
	title: 'Ocorreu um erro',
	standalone: false
}

ErrorMessage.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	standalone: PropTypes.bool.isRequired,
	icon: PropTypes.node,
	classes: PropTypes.object.isRequired
}

export default withStyles(stylesErrorMessage)(ErrorMessage)
