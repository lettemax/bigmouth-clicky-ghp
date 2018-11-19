import React, { Component } from "react";

class Nav extends Component {
    render () { 
        return (
            <nav className="navbar navbar-light yellow">
                <a className="navbar-brand" href="/">Big Mouth Clicky Game</a>
                <span className="nav-item">{this.props.status}</span>
                <span className="navbar-text">Score: {this.props.score} | Top score: {this.props.topScore}</span>
            </nav>
        )
    }
}

export default Nav;