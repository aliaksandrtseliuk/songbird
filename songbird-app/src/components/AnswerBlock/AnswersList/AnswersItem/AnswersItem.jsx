import React, { Component } from 'react'
import classes from './AnswersItem.module.scss'

class AnswersItem extends Component {


  getUserAnswer = () => {
    const {id} = this.props;
  }

  render() {
    const {id, text} = this.props;
    return (
      <li 
        className={classes.AnswersItem}
        id={id}
        onClick={this.getUserAnswer}
      >
        {text}
      </li>
    )
  }
}

export default AnswersItem