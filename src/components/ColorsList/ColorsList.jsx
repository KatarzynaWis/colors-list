import "./ColorsList.scss";
import React from "react";
import ListItem from "./ListItem/ListItem";
import selectColors from "../../helpers/selectColors";
import sortColors from "../../helpers/sortColors";

const ColorsList = ({ colors, options }) => {
  return (
    <div className="list-wrapper">
      <ul className="colors-list">
        {(options !== "default"
          ? selectColors(options, colors)
          : sortColors(colors)
        ).map(({ hex, red, green, blue, saturation }) => {
          return (
            <ListItem
              key={hex}
              hex={hex}
              red={red}
              green={green}
              blue={blue}
              saturation={saturation}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ColorsList;
