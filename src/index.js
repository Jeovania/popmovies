import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker'

/* Style */
import './index.css'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { blue, green, red } from '@material-ui/core/colors'

/* Routes */
import Routes from './Routes'

/* Store */
import Store from './Store'

const theme = createMuiTheme({
	typography: {
		useNextVariants: true
	},
	palette: {
		primary: { light: blue['100'], main: blue['600'], dark: blue['800'] },
		secondary: { light: green['200'], main: green['600'], dark: green['800'] },
		error: red
	}
})

ReactDOM.render(
	<Provider store={Store}>
		<MuiThemeProvider theme={theme}>
			<Routes />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
