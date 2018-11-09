/* Dependencies */
import React, { Component } from 'react'
import ReduxToastr from 'react-redux-toastr'

/**
 * Configuração de tempo, posição e estilo do ReduxToastr
 * @public
 */
export default class Messages extends Component {
	render() {
		const options = {
			okText: 'Confirmar',
			cancelText: 'Cancelar'
		}

		return (
			<ReduxToastr
				timeOut={4000}
				newestOnTop={false}
				preventDuplicates={true}
				position="top-center"
				transitionIn="fadeIn"
				transitionOut="fadeOut"
				progressBar
				confirmOptions={options}
			/>
		)
	}
}
