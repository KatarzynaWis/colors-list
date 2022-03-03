const hexToRgba = (h) => {
  let r, g, b, a;
  if (h.length === 4 || h.length === 5) {
    r = parseInt(h.slice(1, 2) + h.slice(1, 2), 16);
    g = parseInt(h.slice(2, 3) + h.slice(2, 3), 16);
    b = parseInt(h.slice(3, 4) + h.slice(3, 4), 16);
    h.slice(4, 5) ? a = parseInt(h.slice(4, 5) + h.slice(4, 5), 16) : a = 1;
  } else if (h.length === 7 || h.length === 9) {
    r = parseInt(h.slice(1, 3), 16);
    g = parseInt(h.slice(3, 5), 16);
    b = parseInt(h.slice(5, 7), 16);
    h.slice(7, 9) ? a = parseInt(h.slice(7, 9), 16) : a = 1;
  } 
  return {hex: h, red: r, green: g, blue: b, saturation: (a === 0 || a === 1) ? a : (a/255).toFixed(2)};
};

export default hexToRgba;