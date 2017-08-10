import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
    render () {
        const { isMobile } = this.props
        return (
            <div>
                <h1>Hello World { isMobile ? 'Mobile' : 'Desktop'}</h1>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isMobile: state.isMobile
    }
}

export default connect(mapStateToProps)(App)