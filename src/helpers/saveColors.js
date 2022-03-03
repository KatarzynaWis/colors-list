function saveColors(hex) {
  let colors;
  if (localStorage.getItem("colors") === null) {
    colors = [];
  } else {
    colors = JSON.parse(localStorage.getItem("colors"));
  }
  colors.push(hex);
  localStorage.setItem("colors", JSON.stringify(colors));
}

export default saveColors;
