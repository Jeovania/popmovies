import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { stylesPage } from '../assets/styles/Page'

import { PropTypes } from 'prop-types'

class Page extends Component {
	render() {
		const { classes, children, list, noMargin } = this.props
		let classPage = {}

		if (list) {
			classPage = classes.pageList
		} else if (noMargin) {
			classPage = classes.noMargin
		} else {
			classPage = classes.page
		}

		return <main className={classPage}>{children}</main>
	}
}

Page.defaultProps = {
	list: false,
	noMargin: false
}

Page.propTypes = {
	list: PropTypes.bool,
	noMargin: PropTypes.bool
}

export default withStyles(stylesPage)(Page)
