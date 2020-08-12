import React, { Component } from 'react'
import classes from './Header.module.scss'
import Logo from '../../components/Logo/Logo.jsx'
import Score from '../../components/Score/Score.jsx'


class Header extends Component {
  render() {
    const { currentScore } = this.props;
    return (
      <div className={classes.Header}>
        <Logo />
        <Score 
          currentScore ={ currentScore }
        />
      </div>
    )
  }
}

export default Header