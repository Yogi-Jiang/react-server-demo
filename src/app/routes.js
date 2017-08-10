import { Router, Route, IndexRoute } from 'react-router'
import App from './index'
import React from 'react'

const IndexPage = () => {
    return (
        <div>First Page</div>
    )
}

const SecondPage = () => {
    return (
        <div>Second Page</div>
    )
}
const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={IndexPage}></IndexRoute>
        <Route path="second-page" component={SecondPage} />
    </Route>
)

export default routes