import { fade } from '@material-ui/core/styles/colorManipulator'
import { isMobile } from 'react-device-detect'

export const stylesNavbar = ({ palette, spacing, transitions, breakpoints, shape }) => ({
	root: {
		flexGrow: 1
	},
	flex: {
		flexGrow: 1
	},
	appbar: {
		backgroundColor: palette.primary.dark
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
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
		width: isMobile ? 0 : spacing.unit * 9,
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputRoot: {
		color: 'inherit',
		width: '100%'
	},
	inputInput: {
		paddingTop: spacing.unit,
		paddingRight: spacing.unit,
		paddingBottom: spacing.unit,
		paddingLeft: spacing.unit * 10,
		transition: transitions.create('width'),
		width: '100%',
		[breakpoints.up('sm')]: {
			width: 120,
			'&:focus': {
				width: 200
			}
		}
	}
})
