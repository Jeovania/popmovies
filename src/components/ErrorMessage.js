import React from 'react'
import { PropTypes } from 'prop-types'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const ErrorMessage = ({ title, subtitle, icon, children }) => (
	<Grid container direction="column" align="center" justify="center">
		{icon && (
			<Typography variant="h1" color="textSecondary" align="center">
				{icon}
			</Typography>
		)}
		{title && (
			<Typography variant="h5" color="textSecondary" align="center">
				{title}
			</Typography>
		)}
		{subtitle && (
			<Typography variant="subtitle1" color="textSecondary" align="center">
				{subtitle}
			</Typography>
		)}
		{children}
	</Grid>
)

ErrorMessage.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string
}

export default ErrorMessage
