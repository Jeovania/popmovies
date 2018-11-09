/* Dependencies */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

/* Actions */
import BuscaInput from './BuscaInput'

/* Layout */
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import SearchIcon from '@material-ui/icons/Search'
import { stylesNavbar } from '../assets/styles/Navbar'

import logo from '../assets/images/logo.svg'
import { isMobile } from 'react-device-detect'

class Navbar extends Component {
	render() {
		const { classes, hasTabs, titulo, back, backUrl } = this.props

		return (
			<div className={classes.root}>
				<AppBar elevation={hasTabs ? 0 : 2} className={classes.appbar}>
					<Toolbar>
						{back && (
							<IconButton
								className={classes.menuButton}
								color="inherit"
								aria-label="Voltar"
								component={Link}
								to={backUrl}
							>
								<ArrowBackIcon />
							</IconButton>
						)}

						<div className={classes.flex}>
							<img src={logo} alt="Pop Movies" className={classes.logo} />

							{titulo &&
								!isMobile && (
									<Typography variant="h6" color="inherit" noWrap>
										{titulo}
									</Typography>
								)}
						</div>

						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>

							<BuscaInput />
						</div>
					</Toolbar>
				</AppBar>
			</div>
		)
	}
}

Navbar.propTypes = {
	classes: PropTypes.object.isRequired,
	hasTabs: PropTypes.bool,
	back: PropTypes.bool,
	backUrl: PropTypes.string
}

export default withStyles(stylesNavbar)(Navbar)
