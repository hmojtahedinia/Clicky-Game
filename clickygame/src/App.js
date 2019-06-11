import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    characters,
    clickedCharacter: [],
    score: 0
  };

  imageClick = event => {
    const currentCharacter = event.target.alt;
    const CharacterAlreadyClicked =
      this.state.clickedCharacter.indexOf(currentCharacter) > -1;

    if (CharacterAlreadyClicked) {
      this.setState({
        characters: this.state.characters.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCharacter: [],
        score: 0
      });
      alert("You lose. Play again?");
    } else {
      this.setState(
        {
          characters: this.state.characters.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCharacter: this.state.clickedCharacter.concat(
            currentCharacter
          ),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 20) {
            alert("Yay! You Win!");
            this.setState({
              characters: this.state.characters.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedCharacter: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <Wrapper>
        <Title />
        <div id="instruction">
          Click on an image to earn points, but don't click on any more than
          once!
        </div>
        <nav id="test" className="nav navbar">
          <Counter score={this.state.score} />
        </nav>
        {this.state.characters.map(character => (
          <CharacterCard
            imageClick={this.imageClick}
            id={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
