export const stylesDetalhes = theme => ({
	cover: {
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		color: '#fff',
		position: 'relative',
		padding: theme.spacing.unit * 3
	},
	filter: {
		backgroundColor: theme.palette.primary.dark,
		opacity: 0.7,
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		zIndex: 1
	},
	coverContent: {
		position: 'relative',
		zIndex: 2
	},
	posterWrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: theme.spacing.unit * 2
	},
	poster: {
		boxShadow: theme.shadows[8]
	},
	content: {
		[theme.breakpoints.up('md')]: {
			paddingLeft: theme.spacing.unit * 5,
			paddingRight: theme.spacing.unit * 5,
			textAlign: 'left'
		},
		[theme.breakpoints.down('md')]: {
			paddingLeft: theme.spacing.unit * 2,
			paddingRight: theme.spacing.unit * 2,
			textAlign: 'center'
		}
	},
	acoes: {
		marginTop: theme.spacing.unit * 3
	},
	divider: {
		marginBottom: theme.spacing.unit * 3
	},
	videoWrapper: {
		marginTop: theme.spacing.unit * 2,
		marginBottom: theme.spacing.unit * 2,
		paddingRight: theme.spacing.unit * 2,
		paddingLeft: theme.spacing.unit * 2
	},
	videoResponsive: {
		position: 'relative',
		paddingBottom: '56.25%',
		paddingTop: 25,
		height: 0,
		marginBottom: theme.spacing.unit
	},
	iframe: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%'
	},
	tag: {
		marginBottom: theme.spacing.unit,
		marginRight: theme.spacing.unit
	}
})
