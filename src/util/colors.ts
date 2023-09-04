export const PIXEL_COLORS = [
  "#808080", // gray
  "#00FFFF", // aqua
  "#000000", // black
  "#0000FF", // blue
  "#FF00FF", // fuchsia
  "#008000", // green
  "#00FF00", // lime
  "#800000", // maroon
  "#000080", // navy
  "#808000", // olive
  "#800080", // purple
  "#FF0000", // red
  "#C0C0C0", // silver
  "#008080", // teal
  "#FFFFFF", // white
  "#FFFF00", // yellow
];

export const getCanvasPixels = (canvasData: string): number[] => {
  const bytes = Uint8Array.from(atob(canvasData), (c) => c.charCodeAt(0));

  // Single byte => 2 pixel color codes
  const colorCodes: number[] = [];
  for (let i = 0; i < bytes.byteLength; i += 1) {
    const firstCode = bytes[i] >> 4; // 1st nibble
    const secondCode = bytes[i] & 15; // 2nd nibble
    colorCodes.push(firstCode);
    colorCodes.push(secondCode);
  }

  return colorCodes;
};

export const DIMENSION = 100;
export const DEFAULT_CANVAS: number[] = Array.from(
  Array(DIMENSION * DIMENSION).keys()
).map((index) => index % 2);
