import { isMobile } from 'react-device-detect'
let vpHeight = window.innerHeight

export const stylesPage = theme => ({
	page: {
		marginTop: theme.mixins.toolbar.minHeight + theme.spacing.unit * 2,
		marginBottom: theme.spacing.unit * 3,
		paddingRight: theme.spacing.unit * 3,
		paddingLeft: theme.spacing.unit * 3
	},
	noMargin: {
		marginTop: theme.mixins.toolbar.minHeight
	},
	pageList: {
		marginTop: isMobile
			? theme.mixins.toolbar.minHeight
			: theme.mixins.toolbar.minHeight + theme.spacing.unit * 2,
		marginRight: isMobile ? 0 : theme.spacing.unit,
		marginLeft: isMobile ? 0 : theme.spacing.unit
	},
	progressMargin: {
		paddingBottom: theme.spacing.unit * 6,
		paddingTop: theme.spacing.unit * 6
	},
	progressStandalone: {
		height: vpHeight - theme.mixins.toolbar.minHeight,
		display: 'flex',
		alignItems: 'center'
	}
})
