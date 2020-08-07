import React, { Component } from 'react'
import classes from './Header.module.scss'
import Logo from '../../components/Logo/Logo.jsx'
import Score from '../../components/Score/Score.jsx'


class Header extends Component {
  render() {
    return (
      <div className={classes.Header}>
        <Logo />
        <Score />
      </div>
    )
  }
}

export default Header