import React from 'react'
import ReactDOM from 'react-dom'
import Root from "./config/root"

import './assets/styles/style.scss'

const target = document.getElementById('root')

const render = (Component) => {
  ReactDOM.render(<Component />, target)
}

render(Root)