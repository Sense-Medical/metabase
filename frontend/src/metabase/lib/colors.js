// @flow

type ColorName = string;
type Color = string
type ColorFamily = { [name: ColorName]: Color };

export const normal = {
    brand: '#00AD7D',
    blue: '#509EE3',
    green: '#9CC177',
    red: '#EF8C8C',
    yellow: '#f9d45c',
    orange: '#F1B556',
    teal: '#A6E7F3',
    indigo: '#7172AD',
    gray: '#7B8797'
}

export const saturated = {
    brand: '#008761',
    blue: '#2D86D4',
    green: '#84BB4C',
    red: '#ED6E6E',
    yellow: '#F9CF48',
}

export const desaturated = {
    brand: '75D3B9',
    blue: '#72AFE5',
    green: '#A8C987',
    red: '#EEA5A5',
    yellow: '#F7D97B',
}

export const harmony = [
    '#00AD7D',
    '#509ee3',
    '#9cc177',
    '#a989c5',
    '#ef8c8c',
    '#f9d45c',
    '#F1B556',
    '#A6E7F3',
    '#7172AD',
    '#7B8797',
    '#6450e3',
    '#55e350',
    '#e35850',
    '#77c183',
    '#7d77c1',
    '#c589b9',
    '#bec589',
    '#89c3c5',
    '#c17777',
    '#899bc5',
    '#efce8c',
    '#50e3ae',
    '#be8cef',
    '#8cefc6',
    '#ef8cde',
    '#b5f95c',
    '#5cc2f9',
    '#f95cd0',
    '#c1a877',
    '#f95c67',
]

export const getRandomColor = (family: ColorFamily): Color => {
    // $FlowFixMe: Object.values doesn't preserve the type :-/
    const colors: Color[] = Object.values(family)
    return colors[Math.floor(Math.random() * colors.length)]
}
