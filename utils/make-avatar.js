import * as canvasD from 'canvas'
import {getFontColor, getRandomBackground} from './color.js'

const validateData = (data) => {
    let validData =  {
        name: "NU",
        fontface: "Segeo UI",
        fontcolor: "",
        fontstyle: "",
        bgcolor: getRandomBackground(), 
        size: 48,
        fontsize: 0.5, 
        char: 2,
        rounded: true
    }

    if(data.name)
        validData.name = data.name
    if(data.fontface)
        validData.fontface = data.fontface
    if(data.bgcolor)
        validData.bgcolor = data.bgcolor
    if(data.fontcolor)
        validData.fontcolor = data.fontcolor
    else
        validData.fontcolor = getFontColor(validData.bgcolor)

    if(data.fontstyle)
        validData.fontstyle = data.fontstyle
    if(data.size)
        validData.size = parseInt(data.size)  
    if(data.fontsize)
        validData.fontsize = data.fontsize
    if(data.char)
        validData.char = data.char
    if(data.rounded)
        validData.rounded = data.rounded
    
    return validData
}


const getImage = (data) => {
    
    // let data = {
        //     name: "NU",
        //     fontface: "Arial",
        //     fontcolor: "5bb435",
        //     fontstyle: "",
        //     bgcolor: color.getRandomBackground(), 
        //     size: 512,
        //     fontsize: 0.45, 
        //     char: 2,
        //     rounded: false
        // }
        // data.fontcolor = color.getFontColor(data.bgcolor)
            
    // const fs = require('node:fs')
    const canvas = canvasD.createCanvas(data.size,data.size)
    const ctx = canvas.getContext("2d")
    
    ctx.fillStyle = '#' + data.bgcolor 
    
    if(data.rounded){
        ctx.arc(data.size/2,data.size/2,data.size/2,0,Math.PI*2)
        ctx.fill()
    }
    else{
        ctx.fillRect(0,0,data.size,data.size)
    }
    
    ctx.font = `${data.fontstyle} ${Number(data.size)*Number(data.fontsize)}px ${data.fontface}`
    ctx.fillStyle = '#' + data.fontcolor
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(data.name,data.size/2,data.size/2)
    
    
    // fs.writeFileSync("./img.png",canvas.toBuffer("image/png"))
    
    // console.log(data);
    // return canvas.toDataURL()
    return canvas.toBuffer()
        
}
export {getImage, validateData}