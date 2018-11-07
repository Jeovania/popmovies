import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker'

/* Style */
import './index.css'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { blueGrey, green, red } from '@material-ui/core/colors'

/* Routes */
import Routes from './Routes'

/* Store */
import Store from './Store'

const theme = createMuiTheme({
	typography: {
		useNextVariants: true
	},
	palette: {
		primary: { light: blueGrey['400'], main: blueGrey['800'], dark: blueGrey['900'] },
		secondary: { light: green['A200'], main: green['A400'], dark: green['A700'] },
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
