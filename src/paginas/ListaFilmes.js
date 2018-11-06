import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import { isMobile } from 'react-device-detect'

import { getFilmes } from '../redux/filmes.action'

/* Components */
import Navbar from '../components/Navbar'
import Page from '../components/Page'
import Filme from '../components/Filme'
import ErrorMessage from '../components/ErrorMessage'

import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'

class ListaFilmes extends Component {
	state = {
		page: 1,
		data: {}
	}

	componentDidMount() {
		this.props.getFilmes({}, this.state.page)
		document.title = 'Filmes Populares'
	}

	loadNextPage() {
		this.props.getFilmes(this.state.data, this.state.page + 1, false)
		this.setState({ page: this.state.page + 1 })
	}

	render() {
		const { filmes, isLoading, hasMore } = this.props

		return (
			<Fragment>
				<Navbar titulo="Filmes Populares" />
				<Page>
					{isLoading ? (
						<CircularProgress />
					) : filmes.length > 0 ? (
						<InfiniteScroll
							dataLength={filmes.length}
							next={this.loadNextPage.bind(this)}
							hasMore={hasMore}
							hasChildren={filmes.length}
							loader={<CircularProgress size={40} />}
							endMessage={<ErrorMessage subtitle="Não há mais leads para mostrar" />}
						>
							<Grid container direction="row" spacing={isMobile ? 0 : 8}>
								{filmes.map(filme => <Filme key={filme.id} {...filme} />)}
							</Grid>
						</InfiniteScroll>
					) : (
						<ErrorMessage
							title="Não há filmes para mostrar"
							subtitle="Tente novamente mais tarde ou faça uma busca"
						/>
					)}
					<Filme />
				</Page>
			</Fragment>
		)
	}
}

const mapStateToPros = ({ filmes }) => ({
	isLoading: filmes.loading,
	filmes: filmes.filmes,
	hasMore: filmes.hasMore
})

const mapDispatchToProps = dispatch => bindActionCreators({ getFilmes }, dispatch)

export default connect(mapStateToPros, mapDispatchToProps)(ListaFilmes)
