export const stylesNavbar = theme => ({
	root: {
		flexGrow: 1
	},
	flex: {
		display: 'flex',
		flexGrow: 1,
		alignItems: 'center'
	},
	appbar: {
		backgroundColor: theme.palette.primary.dark
	},
	logo: {
		height: 35,
		marginRight: 10
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 0
	},
	profile: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: theme.spacing.unit * 2,
		backgroundColor: theme.palette.primary.dark,
		maxWidth: 290,
		color: '#ffffff'
	},
	avatar: {
		width: 60,
		height: 60,
		marginBottom: theme.spacing.unit
	}
})
