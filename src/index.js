import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";

import "./styles.css";

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      isPressed: false,
      isHovered: true
    };
  }
  render() {
    const btnClass = classNames({
      btn: true,
      "btn-pressed": this.state.isPressed,
      "btn-over": !this.state.isPressed && this.state.isHovered
    });
    return <button className={btnClass}>Hello</button>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Button />, rootElement);
