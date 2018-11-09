import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import StarIcon from '@material-ui/icons/Star'

import { getFavorito, favoritar, desfavoritar } from '../redux/FilmesAction'

class Favorito extends Component {
	constructor(props) {
		super(props)
		props.getFavorito(props.filmeId)
	}

	render() {
		const { isFav, filmeId } = this.props

		return (
			<Fragment>
				{isFav ? (
					<Button
						variant="fab"
						aria-label="Desfazer Favorito"
						color="secondary"
						onClick={() => this.props.desfavoritar(filmeId)}
					>
						<StarIcon />
					</Button>
				) : (
					<Button
						variant="fab"
						aria-label="Favoritar"
						color="default"
						onClick={() => this.props.favoritar(filmeId)}
					>
						<StarIcon />
					</Button>
				)}
			</Fragment>
		)
	}
}

const mapStateToPros = ({ filmes }) => ({
	isFav: filmes.favorito
})

const mapDispatchToProps = dispatch =>
	bindActionCreators({ getFavorito, favoritar, desfavoritar }, dispatch)

export default connect(mapStateToPros, mapDispatchToProps)(Favorito)
