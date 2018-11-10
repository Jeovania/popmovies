/* Dependencies */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { isMobile } from 'react-device-detect'

import Busca from './Busca'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import StarIcon from '@material-ui/icons/Star'
import { stylesNavbar } from '../assets/styles/Navbar'
import Drawer from '@material-ui/core/Drawer'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import logo from '../assets/images/logo.svg'

class Navbar extends Component {
	state = {
		openDrawer: false
	}

	toggleDrawer = open => () => {
		this.setState({
			openDrawer: open
		})
	}

	render() {
		const { classes, hasTabs, titulo, back, backUrl } = this.props

		return (
			<div className={classes.root}>
				<AppBar elevation={hasTabs ? 0 : 2} className={classes.appbar}>
					<Toolbar>
						{back ? (
							<IconButton
								className={classes.menuButton}
								color="inherit"
								aria-label="Voltar"
								component={Link}
								to={backUrl}
							>
								<ArrowBackIcon />
							</IconButton>
						) : (
							<IconButton
								className={classes.menuButton}
								color="inherit"
								aria-label="Menu"
								onClick={this.toggleDrawer(true)}
							>
								<MenuIcon />
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

						<Busca />
					</Toolbar>
				</AppBar>
				<Drawer open={this.state.openDrawer} onClose={this.toggleDrawer(false)}>
					<div
						tabIndex={0}
						role="button"
						onClick={this.toggleDrawer(false)}
						onKeyDown={this.toggleDrawer(false)}
					>
						<div className={classes.profile}>
							<Avatar alt="Pop Movies" src={logo} className={classes.avatar} />
							<Typography variant="h6" color="inherit">
								Pop Movies
							</Typography>
							<Typography variant="subtitle1" color="inherit" gutterBottom>
								Os filmes mais populares do momento
							</Typography>
						</div>
						<div className={classes.list}>
							<List component="nav" disablePadding>
								<ListItem button component={Link} to="/" divider>
									<ListItemIcon>
										<VideoLibraryIcon />
									</ListItemIcon>
									<ListItemText primary="Lista de Filmes" />
								</ListItem>
								<ListItem button component={Link} to="/favoritos">
									<ListItemIcon>
										<StarIcon />
									</ListItemIcon>
									<ListItemText primary="Favoritos" />
								</ListItem>
							</List>
						</div>
					</div>
				</Drawer>
			</div>
		)
	}
}

Navbar.defaultProps = {
	size: 50,
	hasTabs: false,
	back: false
}

Navbar.propTypes = {
	classes: PropTypes.object.isRequired,
	size: PropTypes.number.isRequired,
	hasTabs: PropTypes.bool.isRequired,
	back: PropTypes.bool.isRequired,
	backUrl: PropTypes.string
}

export default withStyles(stylesNavbar)(Navbar)
