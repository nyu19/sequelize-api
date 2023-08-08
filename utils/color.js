import tinycolor from "tinycolor2"
const intensity = 50

function getRandomBackground() {
    return tinycolor.random().toHex();
}

function getFontColor(bgColor) {
    let x = tinycolor(bgColor)
    if(x.isDark()){
        return x.brighten(intensity).toHex()
    }
    else{
        return x.darken(intensity).toHex()
    }
}

export {getRandomBackground, getFontColor}