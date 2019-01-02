import React, { Component } from "react";
import "./Wrapper.css";
import charactersList from "../../characters.json"
import Card from "../Card"
import Header from "../Header"
import Nav from "../Nav"

class Wrapper extends Component {
    // Setting the component's initial state
    state = {
      score: 0,
      topScore: 0,
      characters: charactersList,
      clicked: [],
      status: ""
    };

    // When user clicks character card
    handleClick = (e) => {
        // Prevent event default
        e.preventDefault();
        // Console log the target
        console.log(e.target);
        // Get the selected card's name
        let name = e.target.name;
        // Log the name
        console.log("clicked " + name)
        // Create array to hold clicked characters
        let arr = this.state.clicked;
        // Handle successful click
        if (!this.state.clicked.includes(name)) {
            // Push character name to array
            arr.push(name);
            // Log correct guess in console
            console.log("pushed " + name)
            // Create new variable to hold new score
            let newScore = this.state.score + 1;
            // Update status message, clicked array and score
            this.setState({status: "Nice click"})
            this.setState({clicked: arr})
            this.setState({score: newScore})
            // Handle game win
            if (newScore == 12) {
                // Update status message, clicked array and score
                this.setState({status: "You won!!! New game started"})
                this.setState({score: 0})
                this.setState({clicked: []})
            }
            // Handle new top score
            if (newScore > this.state.topScore) {
                // Update top score to match new high score
                this.setState({topScore: newScore})
            }
        // Handle wrong click
        } else {
            // Console log character name
            console.log("already clicked: " + name)
            // Reset clicked array
            this.setState({clicked: []})
            // Update status message 
            this.setState({status: "You already clicked " + name + ". New game started"})
            // Update score
            this.setState({score: 0})
        }
        // Shuffle function
        /**
         * Shuffles array in place. ES6 version
         * param {Array} a items An array containing the items.
         */
        // Create new array and fill with all character objects
        let a = this.state.characters;
        // Loop through array, shuffling elements
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
        }
        // Assign our new random characters array to the state characters array
        this.setState({characters: a});
    }
  
    render() {
      // Notice how each input has a `value`, `name`, and `onChange` prop
      return (
        <div>
         <Nav 
            key = {1}
            score = {this.state.score}
            topScore = {this.state.topScore}
            status = {this.state.status}
         />
         <Header />
          <div className="container" id="card-container">
            <div className="row">
                {
                    this.state.characters.map(
                        character => <Card 
                            key = {character.id}
                            id = {character.id}
                            name = {character.name}
                            image = {character.image}
                            handleClick = {this.handleClick}
                        />
                    ) 
                }
            </div>
          </div>
        </div>
      );
    }
}
  
export default Wrapper;
  