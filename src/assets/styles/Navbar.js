import { fade } from '@material-ui/core/styles/colorManipulator'

export const stylesNavbar = ({ palette, spacing, transitions, breakpoints, shape }) => ({
	root: {
		flexGrow: 1
	},
	flex: {
		display: 'flex',
		flexGrow: 1,
		alignItems: 'center'
	},
	appbar: {
		backgroundColor: palette.primary.dark
	},
	logo: {
		height: 35,
		marginRight: 10
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 0
	},
	search: {
		position: 'relative',
		borderRadius: shape.borderRadius,
		backgroundColor: fade(palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(palette.common.white, 0.25)
		},
		marginLeft: 0,
		width: '100%',
		[breakpoints.up('sm')]: {
			marginLeft: spacing.unit,
			width: 'auto'
		}
	},
	searchIcon: {
		width: spacing.unit * 9,
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
