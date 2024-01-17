export default function rgbToHex(color: string): string {
  // RGBの正規表現
  const reg = /^(rgb|RGB)/;
  if (reg.test(color)) {
    let strHex = '#';
    const colorArr = color.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
    // RGBから16進数へ転換
    for (let i = 0; i < colorArr.length; i += 1) {
      let hex = Number(colorArr[i]).toString(16);
      if (hex === '0') {
        hex += hex;
      }
      strHex += hex;
    }
    return strHex;
  }
  return color;
}
