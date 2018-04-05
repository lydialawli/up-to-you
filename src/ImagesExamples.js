import React from 'react'
import { Image } from 'react-native'


const coin = () => (
    <Image style = {{width:200, height:200}} source = {require("./img/coin-heads.png")} />
)


var tails = () => (
    <Image style = {{width:200, height:200}} source = {require("./img/coin-tails.png")} />
)


export default coin