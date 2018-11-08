export const stylesFilme = theme => ({
	card: {
		display: 'flex'
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'start'
	},
	content: {
		flex: '1 0 auto',
		alignItems: 'start'
	},
	cover: {
		width: 151,
		height: 175
	},
	controls: {
		marginTop: theme.spacing.unit * 2
	}
})
