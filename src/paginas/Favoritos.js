import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import { isMobile } from 'react-device-detect'

import { getFavoritos } from '../redux/FilmesAction'

/* Components */
import Navbar from '../components/Navbar'
import Page from '../components/Page'
import Filme from '../components/Filme'
import ErrorMessage from '../components/ErrorMessage'
import Progress from '../components/Progress'

import Grid from '@material-ui/core/Grid'

class Favoritos extends Component {
	state = {
		page: 1,
		data: {}
	}

	componentDidMount() {
		this.props.getFavoritos({}, this.state.page)
		document.title = 'Filmes Favoritos'
	}

	loadNextPage() {
		this.props.getFavoritos(this.state.data, this.state.page + 1, false)
		this.setState({ page: this.state.page + 1 })
	}

	render() {
		const { filmes, isLoading, hasMore } = this.props

		return (
			<Fragment>
				<Navbar titulo="Favoritos" />

				<Page list>
					{isLoading ? (
						<Progress />
					) : filmes.length > 0 ? (
						<InfiniteScroll
							dataLength={filmes.length}
							next={this.loadNextPage.bind(this)}
							hasMore={hasMore}
							hasChildren={filmes.length}
							loader={<Progress size={40} />}
							endMessage={<ErrorMessage subtitle="Não há mais filmes para mostrar" />}
						>
							<Grid container direction="row" spacing={isMobile ? 0 : 8}>
								{filmes.map((filme, index) => <Filme key={index} {...filme} />)}
							</Grid>
						</InfiniteScroll>
					) : (
						<ErrorMessage
							title="Não há filmes para mostrar"
							subtitle="Tente novamente mais tarde ou faça uma busca"
						/>
					)}
				</Page>
			</Fragment>
		)
	}
}

const mapStateToPros = ({ filmes }) => ({
	isLoading: filmes.loading,
	filmes: filmes.favoritos,
	hasMore: filmes.hasMoreFavoritos
})

const mapDispatchToProps = dispatch => bindActionCreators({ getFavoritos }, dispatch)

export default connect(mapStateToPros, mapDispatchToProps)(Favoritos)
