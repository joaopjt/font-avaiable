export default function isFontAvaiable(font) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const text = "abcdefghijklmnopqrstuvwxyz0123456789";

  context.font = "72px monospace";

  const blSize = context.measureText(text).width;

  context.font = "72px '" + fontName + "', monospace";

  const newSize = context.measureText(text).width;

  delete canvas;

  if (newSize == blSize) {
    return false;
  }

  return true;
}
