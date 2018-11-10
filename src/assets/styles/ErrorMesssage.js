let vpHeight = window.innerHeight

export const stylesErrorMessage = theme => ({
	spacing: {
		padding: theme.spacing.unit * 2
	},
	standalone: {
		height: vpHeight - theme.mixins.toolbar.minHeight,
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing.unit * 2
	}
})
