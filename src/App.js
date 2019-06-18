import React from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import Header from "./components/Header";
import cards from "./cards.json";
import './App.css';


class App extends React.Component{
  state = {
    cards,
    score: 0,
    highScore: 0
  };

  Counter = id => {
    this.state.cards.find((onClick, i) => {
      if (onClick.id === id) {
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }

  gameOver = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({highScore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over! Final Score: {this.state.score}`);
    this.setState({score: 0});
    return true;
  }







}
export default App;
