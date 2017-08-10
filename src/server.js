import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import template from './template'
import routes from './app/routes'
import reducer from './app/reducer'

const server = express()
server.use('/assets', express.static('assets'))

server.get('*', (req, res) => {
    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
        if (error) {
            res.send(500, error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            const initialState = {
                isMobile: true
            }
            const store = createStore(reducer, initialState)
            const appString = renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps}/>
                </Provider>
            )
            const preloadedState = store.getState()
            res.send(template({
                body: appString,
                title: 'Hello world from server',
                initialState: JSON.stringify(preloadedState)
            }))
        } else {
            res.send(404, 'Not Found')
        }
    })
    
})

server.listen(3001)