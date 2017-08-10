import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import routes from './routes'
import reducer from './reducer'

const store = createStore(reducer, window.__INITIAL_STATE__)

render(<Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
</Provider>, document.getElementById('root'))