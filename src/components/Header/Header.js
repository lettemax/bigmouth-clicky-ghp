import React, { Component } from "react";

class Header extends Component {
    render () { 
        return (
            <header className="header">
                <h2>
                    Big Mouth-themed clicky game!
                </h2>
                <h3>
                    Click on an image to earn points, but don't click on any more than once!
                </h3>
            </header>
        )
    }
}

export default Header;