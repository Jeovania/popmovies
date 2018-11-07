/* Dependencies */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
//import { isMobile } from 'react-device-detect'
import { debounce } from 'underscore'

/* Actions */
import { busca } from '../redux/FilmesAction'

/* Layout */
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import SearchIcon from '@material-ui/icons/Search'
import { stylesNavbar } from '../assets/styles/Navbar'

class Navbar extends Component {
	buscar(e) {
		debounce(this.props.busca(e.target.value), 500)
	}

	render() {
		const { classes, titulo, hasTabs, back, backUrl } = this.props

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
						<Typography variant="h6" color="inherit" className={classes.flex} noWrap>
							{titulo}
						</Typography>

						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder="Buscar filme"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput
								}}
								onChange={this.buscar.bind(this)}
							/>
						</div>
					</Toolbar>
				</AppBar>
			</div>
		)
	}
}

Navbar.propTypes = {
	classes: PropTypes.object.isRequired,
	titulo: PropTypes.string.isRequired,
	hasTabs: PropTypes.bool,
	back: PropTypes.bool,
	backUrl: PropTypes.string
}

const mapDispatchToProps = dispatch => bindActionCreators({ busca }, dispatch)

const mapStateToProps = state => ({
	busca: state.filmes.busca
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(stylesNavbar)(Navbar))
