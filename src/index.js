import React from 'react'
import renderDOM from 'react-dom'
import Home from './js/containers/home.jsx'
import './css/styles.css'
import './css/normalize.css'
const app = document.getElementById('app')
renderDOM.render(<Home />,app)
