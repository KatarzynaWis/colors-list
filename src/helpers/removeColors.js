function removeColors(hexElement) {
  let colors;
  if (localStorage.getItem("colors") === null) {
    colors = [];
  } else {
    colors = JSON.parse(localStorage.getItem("colors"));
  }
  const hexElementIndex = hexElement.children[0].innerText;
  colors.splice(colors.indexOf(hexElementIndex), 1);
  localStorage.setItem("colors", JSON.stringify(colors));
}
export default removeColors;
