import convert from "color-convert"
import _ from "lodash"

type ColorHsl = [number, number, number]
type Palette = Record<50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, ColorHsl>
type Theme = Record<'primary' | 'secondary' | 'gray' | 'red' | 'yellow' | 'green', Palette>

const PRIMARY_HSL: Palette = {
  "50": [315, 100, 95],
  "100": [315, 100, 86],
  "200": [315, 100, 77],
  "300": [315, 97, 69],
  "400": [315, 79, 56],
  "500": [315, 85, 46],
  "600": [315, 90, 39],
  "700": [315, 93, 33],
  "800": [315, 93, 27],
  "900": [316, 98, 21],
}

const SECONDARY_HSL: Palette = {
  "50": [261, 100, 95],
  "100": [260, 100, 85],
  "200": [260, 97, 75],
  "300": [260, 94, 67],
  "400": [260, 92, 61],
  "500": [260, 98, 56],
  "600": [260, 79, 46],
  "700": [260, 83, 41],
  "800": [260, 87, 34],
  "900": [260, 96, 27],
}

const GRAY_HSL: Palette = {
  "50": [260, 20, 97],
  "100": [262, 17, 91],
  "200": [267, 13, 83],
  "300": [267, 5, 65],
  "400": [265, 5, 53],
  "500": [263, 6, 43],
  "600": [262, 6, 37],
  "700": [267, 6, 30],
  "800": [264, 6, 16],
  "900": [260, 7, 8],
}

const GREEN_HSL: Palette = {
  "50": [120, 100, 97],
  "100": [119, 76, 87],
  "200": [119, 75, 75],
  "300": [119, 57, 62],
  "400": [119, 50, 53],
  "500": [119, 77, 38],
  "600": [119, 71, 31],
  "700": [119, 78, 23],
  "800": [119, 90, 16],
  "900": [119, 100, 8],
}

const YELLOW_HSL: Palette = {
  "50": [48, 100, 96],
  "100": [48, 96, 89],
  "200": [48, 97, 77],
  "300": [46, 97, 65],
  "400": [43, 96, 56],
  "500": [38, 92, 50],
  "600": [32, 95, 44],
  "700": [26, 90, 37],
  "800": [23, 83, 31],
  "900": [22, 78, 26],
  // "950": [21, 92, 14],
}

const RED_HSL: Palette = {
  "50": [339, 100, 95],
  "100": [340, 100, 87],
  "200": [340, 100, 80],
  "300": [340, 91, 69],
  "400": [340, 83, 62],
  "500": [340, 74, 54],
  "600": [340, 85, 44],
  "700": [340, 90, 35],
  "800": [340, 94, 28],
  "900": [340, 94, 20],
}

function convertThemeToHex(theme: Theme) {
  return _.mapValues(theme, (palette) => _.mapValues(palette, colorHsl => `#${convert.hsl.hex(colorHsl)}`))
}

const theme: Theme = {
  primary: PRIMARY_HSL,
  secondary: SECONDARY_HSL,
  gray: GRAY_HSL,
  red: RED_HSL,
  yellow: YELLOW_HSL,
  green: GREEN_HSL,
}

export default {
  hsl: theme,
  hex: convertThemeToHex(theme),
}
