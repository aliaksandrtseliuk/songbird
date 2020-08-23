import React, { Component } from "react";
import classes from "./RoundsItem.module.scss";

class RoundsItem extends Component {
  render() {
    const { index, title, activeRound } = this.props;
    const cls = [classes.RoundsItem];

    if (index === activeRound) {
      cls.push(classes.current);
    }

    return (
      <li className={cls.join(" ")} id={index}>
        {title}
      </li>
    );
  }
}

export default RoundsItem;
