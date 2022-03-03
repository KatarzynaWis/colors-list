import React, { Component } from "react";
import "./ListItem.scss";

class ListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="colors-list__item">
        <div
          className="colors-list__colored-rectangle"
          style={{ background: this.props.hex }}></div>
        <p>
          <span className="colors-list__span">
            HEX {this.props.hex.toUpperCase()}
          </span>
          <span className="colors-list__span">
            RGBA ({this.props.red}, {this.props.green}, {this.props.blue},{" "}
            {this.props.saturation})
          </span>
        </p>
      </li>
    );
  }
}
export default ListItem;
