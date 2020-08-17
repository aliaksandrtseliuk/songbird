import React, { Component } from 'react'
import classes from './ModalBlock.module.scss'

import ModalButton from './ModalButton/ModalButton.jsx'

class ModalBlock extends Component {
  render() {
    const {
      currentScore,
      newSetState
    } = this.props;

    if (currentScore !== 30) {
      return (
        <div className={classes.ModalBlock}>
          <h1 className={classes.ModalBlock__Title}>Поздравляем!</h1>
          <p className={classes.ModalBlock__Text}>Вы прошли викторину и набрали {currentScore} из 30 возможных баллов</p>
          <ModalButton 
            newSetState = {newSetState}
          />
        </div>
      )
    } else {
      return (
        <div className={classes.ModalBlock}>
          <h1 className={classes.ModalBlock__Title}>Отлично!</h1>
          <p className={classes.ModalBlock__Text}>Вы набрали максимальное количество баллов!</p>
          <div className={classes.ModalBlock__Image}>
            <audio 
              src='https://zvukipro.com/uploads/files/2017-09/1505636534_zvuk-1-mesto-aplodismenty.mp3'
              preload='none'
              loop='true'
              autoplay='autoplay'
            ></audio>
          </div>
          <ModalButton 
            newSetState = {newSetState}
          />
        </div>
      )
    }
  }
}

export default ModalBlock