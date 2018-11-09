import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'
import { debounce } from 'underscore'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import { busca } from '../redux/FilmesAction'

import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import ListItem from '@material-ui/core/ListItem'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles } from '@material-ui/core/styles'
import { stylesBusca } from '../assets/styles/Busca'

function renderInputComponent(inputProps) {
	const { classes, inputRef = () => {}, ref, ...other } = inputProps

	return (
		<TextField
			fullWidth
			InputProps={{
				inputRef: node => {
					ref(node)
					inputRef(node)
				},
				classes: {
					input: classes.input
				}
			}}
			{...other}
		/>
	)
}

function renderSuggestion(suggestion) {
	return (
		<ListItem component={Link} to={`/detalhes/${suggestion.id}`} divider button>
			<Avatar
				alt={suggestion.title}
				src={`https://image.tmdb.org/t/p/w92/${suggestion.poster_path}`}
			/>

			<ListItemText
				primary={suggestion.title}
				secondary={suggestion.release_date.substring(0, 4)}
			/>
		</ListItem>
	)
}

function getSuggestionValue(suggestion) {
	return suggestion.title
}

class BuscaInput extends Component {
	state = {
		busca: '',
		suggestions: []
	}

	buscar(e) {
		if (e.target.value) {
			this.setState({
				busca: e.target.value
			})
			debounce(this.props.busca(e.target.value), 500)
		}
	}

	handleSuggestionsFetchRequested = ({ value }) => {
		if (this.props.resultados) {
			this.setState({
				suggestions: this.props.resultados
			})
		} else {
			this.setState({
				suggestions: []
			})
		}
	}

	handleSuggestionsClearRequested = () => {
		this.setState({
			suggestions: []
		})
	}

	render() {
		const { classes } = this.props

		const autosuggestProps = {
			renderInputComponent,
			suggestions: this.state.suggestions,
			onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
			onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
			getSuggestionValue,
			renderSuggestion
		}

		return (
			<Autosuggest
				{...autosuggestProps}
				inputProps={{
					classes: {
						root: classes.inputRoot,
						input: classes.inputInput
					},
					placeholder: 'Buscar filme',
					value: this.state.busca,
					onChange: e => this.buscar(e)
				}}
				theme={{
					container: classes.container,
					suggestionsContainerOpen: classes.suggestionsContainerOpen,
					suggestionsList: classes.suggestionsList,
					suggestion: classes.suggestion
				}}
				renderSuggestionsContainer={options => (
					<Paper {...options.containerProps} square>
						{options.children}
					</Paper>
				)}
			/>
		)
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({ busca }, dispatch)

const mapStateToProps = ({ filmes }) => ({
	resultados: filmes.busca
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(stylesBusca)(BuscaInput))
