const sortColors = (colors) => {
  return colors.sort((a, b) => {
    if (a.red !== b.red) {
      return b.red - a.red;
    } else if (a.green !== b.green) {
      return b.green - a.green;
    } else if (a.blue !== b.blue) {
      return b.blue - a.blue;
    }
  });
};
export default sortColors;