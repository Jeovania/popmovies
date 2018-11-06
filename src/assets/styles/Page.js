import { isMobile } from 'react-device-detect'

export const stylesPage = theme => ({
	page: {
		marginTop: theme.mixins.toolbar.minHeight + theme.spacing.unit * 2,
		marginBottom: theme.spacing.unit * 3,
		paddingRight: theme.spacing.unit * 3,
		paddingLeft: theme.spacing.unit * 3
	},
	noMargin: {
		marginTop: isMobile ? theme.mixins.toolbar.minHeight : 0,
		marginBottom: isMobile ? theme.mixins.toolbar.minHeight : 0
	},
	pageList: {
		marginTop: theme.mixins.toolbar.minHeight
	},
	progressMargin: {
		paddingBottom: theme.spacing.unit * 6,
		paddingTop: theme.spacing.unit * 6
	}
})
