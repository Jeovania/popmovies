import * as firebase from 'firebase'
import { FIREBASE_DB_CONFIG } from './filmes.types'

firebase.initializeApp(FIREBASE_DB_CONFIG)

export const favoritosRef = firebase.database().ref('favoritos')
