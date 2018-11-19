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

    // shuffle = () => {
        
    // }

    // when the user clicks on a character card
    handleClick = (e) => {
        
        e.preventDefault();

        console.log(e.target);

        // grab the selected card's id
        let name = e.target.name;
        //
        console.log("clicked " + name)
        // declare array to hold changes of state
        let arr = this.state.clicked;

        if (!this.state.clicked.includes(name)) {

            // Push to arr
            arr.push(name);

            // Log 
            console.log("pushed " + name)

            let newScore = this.state.score;
            newScore+=1;

            // Set state
            this.setState({status: "Correct guess"})
            this.setState({clicked: arr})
            this.setState({score: newScore})

            if (newScore == 12) {
                this.setState({status: "You won!!! New game started"})
                this.setState({score: 0})
                this.setState({clicked: []})
            }
            
            if (newScore > this.state.topScore) {
                this.setState({topScore: newScore})
            }

        } else {

            //
           console.log("already clicked: " + name)

           //
           this.setState({clicked: []})

           this.setState({status: "You already guessed " + name + ". New game started"})

           this.setState({score: 0})
        }
        // setTimeout(()=> {
            /**
             * Shuffles array in place. ES6 version
             * param {Array} a items An array containing the items.
             */
            let a = this.state.characters;

            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                    [a[i], a[j]] = [a[j], a[i]];
            }

            // Assign our new random characters array to the state characters array
            this.setState({characters: a});
        
        // }, 100);

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

                            key          ={character.id}
                            id           ={character.id}
                            name         ={character.name}
                            image        ={character.image}
                            handleClick  ={this.handleClick}

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
  