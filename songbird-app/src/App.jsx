import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout.jsx';
import Header from './containers/Header/Header.jsx'
import Main from './containers/Main/Main.jsx'

class App extends Component {
  state = {
    currentScore: 0,
    rounds: ['Водоплавающие', 'Лесные', 'Хищники', 'Насекомоядные', 'Луговые', 'Болотные'],
    activeRound: 0,
    roundPoints: 5,
    getRightAnswer: false,
    rightAnswerNumber: 1,
    userAnswer: null,
    isGameFinished: false
  }

  render() {
    return (
      <Layout>
        <Header 
          currentScore= {this.state.currentScore}
        />
        <Main
          currentScore = {this.state.currentScore}
          rounds = {this.state.rounds}
          activeRound = {this.state.activeRound}
          roundPoints = {this.state.roundPoints}
          getRightAnswer = {this.state.getRightAnswer}
          rightAnswerNumber = {this.state.rightAnswerNumber}
          userAnswer = {this.state.userAnswer}
          isGameFinished = {this.state.isGameFinished}
        />
      </Layout>
    );
  }
}

export default App;
