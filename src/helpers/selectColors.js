const selectColors = (selected, colors) => {
  if (selected === "default") {
    return colors;
  } else if (selected === "Red") {
    return colors.filter((color) => color.red > 127)
  } else if (selected === "Green") {
    return colors.filter((color) => color.green > 127)
  } else if (selected === "Blue") {
    return colors.filter((color) => color.blue > 127)
  } else if (selected === "Saturation") {
    return colors.filter((color) => color.saturation > 0.5)
  }
}
export default selectColors;