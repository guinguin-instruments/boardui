import { Color } from '@guinguin-instruments/boardui-core';

export class ColorHelper {
  static getSVGColor(color: Color) {
    return `rgb(${color.r},${color.g},${color.b})`;
  }
}
