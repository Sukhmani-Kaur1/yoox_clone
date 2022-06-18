import {mensNavbar} from "../mynavbarComponents/mensNavbar.js"
document.getElementById("myNavbar").innerHTML = mensNavbar();

let shoesData = [
{
    "name": "ADIDAS",
    "img": "https://www.yoox.com/images/items/17/17294206tp_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": " Sneakers",
    "price": " $ 57.00",
    "size": " 6.5 8"
},
{
    "name": "ADIDAS",
    "img": "https://www.yoox.com/images/items/17/17277518mp_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": " Sneakers ",
    "price": "$ 89.00 ",
    "size": "8"
},
{
    "name": "ADIDAS ",
    "img": "https://www.yoox.com/images/items/17/17268203ka_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Sneakers ",
    "price": "$ 89.00",
    "size": " 8 9"
},
{
    "name": "ADIDAS ",
    "img": "https://www.yoox.com/images/items/17/17247262dd_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Sneakers",
    "price": " $ 97.00 ",
    "size": "10"
},
{
    "name": "ADIDAS ",
    "img": "https://www.yoox.com/images/items/17/17294342ox_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Sneakers ",
    "price": " $ 89.0",
    "size": "11 12 "
},
{
    "name": "PUMA ",
    "img": "https://www.yoox.com/images/items/17/17265596jb_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Suede  VTG Blocked Sneakers",
    "price": "$ 118.00",
    "size": "10 12 "
},
{
    "name": "PUMA  ",
    "img": "https://www.yoox.com/images/items/17/17265639ai_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Electrify Nitro Sneakers",
    "price": "$ 118.00",
    "size": "9 8 10"
},
{
    "name": "PUMA ",
    "img": "https://www.yoox.com/images/items/17/17256477bl_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Slipstream Lo Retro Sneakers",
    "price": " $ 118.00",
    "size": " 8 9 10"
},
{
    "name": "PUMA ",
    "img": "https://www.yoox.com/images/items/17/17256471ju_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Slipstream Lo Retro Sneakers",
    "price": " $ 118.00",
    "size": "8 10 12"
},
{
    "name": "PUMA  ",
    "img": "https://www.yoox.com/images/items/17/17246768ea_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Ftr Rider x Black Fi Sneakers",
    "price": "$ 93.00",
    "size": "10 12  13"
},
{
    "name": "PUMA",
    "img": "https://www.yoox.com/images/items/17/17265614xl_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Blaze of Glory Premium Sneakers",
    "price": "  $ 177.00",
    "size": "12 13 14"
},
{
    "name": "REEBOK ",
    "img": "https://www.yoox.com/images/items/17/17276546jq_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "EAMES CLASSIC LEATHER Sneakers",
    "price": " $ 120.00",
    "size": "10 12 14"
},
{
    "name": "REEBOK   ",
    "img": "https://www.yoox.com/images/items/17/17273554pj_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "LEATHER Sneakers",
    "price": "$ 120.00",
    "size": ""
},
{
    "name": "REEBOK ",
    "img": "https://www.yoox.com/images/items/17/17280434vq_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Sneakers ",
    "price": " $ 111.00",
    "size": "10 11.5"
},
{
    "name": "REEBOK Sneakers 37% OFF $ 118.00",
    "img": "https://www.yoox.com/images/items/17/17280393bb_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Sneakers ",
    "price": "$ 188.00 ",
    "size": "10 11 12"
},
{
    "name": "HOGAN ",
    "img": "https://www.yoox.com/images/items/17/17283436qm_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Sneakers ",
    "price": "$ 432.00",
    "size": "10 12 13 14"
},
{
    "name": "HOGAN]",
    "img": "https://www.yoox.com/images/items/17/17283510bt_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Laced shoes ",
    "price": " $ 452.00",
    "size": "10 8 9"
},
{
    "name": "HOGAN Boots ",
    "img": "https://www.yoox.com/images/items/17/17291062br_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Boots ",
    "price": "$ 151.00",
    "size": "7 8 10"
},
{
    "name": "HOGAN",
    "img": "https://www.yoox.com/images/items/17/17286652tn_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Sneakers ",
    "price": " $ 343.00 ",
    "size": "10 12 9"
},
{
    "name": "HOGAN Sneakers ",
    "img": "https://www.yoox.com/images/items/17/17283456kp_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Sneakers ",
    "price": "$ 303.00",
    "size": "10 11 12"
},
{
    "name": "ALEXANDER MCQUEEN ",
    "img": "https://www.yoox.com/images/items/17/17268600bx_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Sneakers ",
    "price": "$ 444.00",
    "size": "10 11 12"
},
{
    "name": "ALEXANDER MCQUEEN ",
    "img": "https://www.yoox.com/images/items/17/17273534pi_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Boots",
    "price": " $ 992.00 ",
    "size": "10 12 13"
},
{
    "name": "ALEXANDER MCQUEEN  ",
    "img": "https://www.yoox.com/images/items/17/17283436qm_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Sneakers  ",
    "price": "$ 480.00",
    "size": "12 13 14"
},
{
    "name": "ALEXANDER MCQUEEN",
    "img": "https://www.yoox.com/images/items/17/17283527ow_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Sneakers ",
    "price": " $ 859.00",
    "size": "10 12 14 "
}
];


let adidas = [
{
    "name": "ADIDAS",
    "img": "https://www.yoox.com/images/items/17/17294206tp_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": " Sneakers",
    "price": " $ 57.00",
    "size": " 6.5 8"
},
{
    "name": "ADIDAS",
    "img": "https://www.yoox.com/images/items/17/17277518mp_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": " Sneakers ",
    "price": "$ 89.00 ",
    "size": "8"
},
{
    "name": "ADIDAS ",
    "img": "https://www.yoox.com/images/items/17/17268203ka_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Sneakers ",
    "price": "$ 89.00",
    "size": " 8 9"
},
{
    "name": "ADIDAS ",
    "img": "https://www.yoox.com/images/items/17/17247262dd_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Sneakers",
    "price": " $ 97.00 ",
    "size": "10"
},
{
    "name": "ADIDAS ",
    "img": "https://www.yoox.com/images/items/17/17294342ox_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Sneakers ",
    "price": " $ 89.0",
    "size": "11 12 "
}
];
let puma  = [
{
    "name": "PUMA ",
    "img": "https://www.yoox.com/images/items/17/17265596jb_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Suede  VTG Blocked Sneakers",
    "price": "$ 118.00",
    "size": "10 12 "
},
{
    "name": "PUMA  ",
    "img": "https://www.yoox.com/images/items/17/17265639ai_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Electrify Nitro Sneakers",
    "price": "$ 118.00",
    "size": "9 8 10"
},
{
    "name": "PUMA ",
    "img": "https://www.yoox.com/images/items/17/17256477bl_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Slipstream Lo Retro Sneakers",
    "price": " $ 118.00",
    "size": " 8 9 10"
},
{
    "name": "PUMA ",
    "img": "https://www.yoox.com/images/items/17/17256471ju_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Slipstream Lo Retro Sneakers",
    "price": " $ 118.00",
    "size": "8 10 12"
},
{
    "name": "PUMA  ",
    "img": "https://www.yoox.com/images/items/17/17246768ea_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Ftr Rider x Black Fi Sneakers",
    "price": "$ 93.00",
    "size": "10 12  13"
},
{
    "name": "PUMA",
    "img": "https://www.yoox.com/images/items/17/17265614xl_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Blaze of Glory Premium Sneakers",
    "price": "  $ 177.00",
    "size": "12 13 14"
}
]
let rebok = [
{
    "name": "REEBOK ",
    "img": "https://www.yoox.com/images/items/17/17276546jq_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "EAMES CLASSIC LEATHER Sneakers",
    "price": " $ 120.00",
    "size": "10 12 14"
},
{
    "name": "REEBOK   ",
    "img": "https://www.yoox.com/images/items/17/17273554pj_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "LEATHER Sneakers",
    "price": "$ 120.00",
    "size": ""
},
{
    "name": "REEBOK ",
    "img": "https://www.yoox.com/images/items/17/17280434vq_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Sneakers ",
    "price": " $ 111.00",
    "size": "10 11.5"
},
{
    "name": "REEBOK Sneakers 37% OFF $ 118.00",
    "img": "https://www.yoox.com/images/items/17/17280393bb_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Sneakers ",
    "price": "$ 188.00 ",
    "size": "10 11 12"
}
]
let aLEXANDERMCQUEEN = [
{
    "name": "ALEXANDER MCQUEEN ",
    "img": "https://www.yoox.com/images/items/17/17268600bx_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Sneakers ",
    "price": "$ 444.00",
    "size": "10 11 12"
},
{
    "name": "ALEXANDER MCQUEEN ",
    "img": "https://www.yoox.com/images/items/17/17273534pi_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Boots",
    "price": " $ 992.00 ",
    "size": "10 12 13"
},
{
    "name": "ALEXANDER MCQUEEN  ",
    "img": "https://www.yoox.com/images/items/17/17283436qm_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Sneakers  ",
    "price": "$ 480.00",
    "size": "12 13 14"
},
{
    "name": "ALEXANDER MCQUEEN",
    "img": "https://www.yoox.com/images/items/17/17283527ow_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
    "para": "Sneakers ",
    "price": " $ 859.00",
    "size": "10 12 14 "
}
];


let appendDatacontainer = document.getElementById("appendDatacontainer")

import appendDataToNavbar from "../mynavbarComponents/appendProductsData.js"

appendDataToNavbar(appendDatacontainer,shoesData)


let alldata = () => {

appendDatacontainer.innerHTML=null

appendDataToNavbar(appendDatacontainer,shoesData)
}


document.getElementById("alldata").addEventListener("click",alldata)




let appendtoadidas = () => {

appendDatacontainer.innerHTML=null

appendDataToNavbar(appendDatacontainer,adidas)
}


document.getElementById("adidas").addEventListener("click",appendtoadidas)



let appendtopuma = () => {

appendDatacontainer.innerHTML=null

appendDataToNavbar(appendDatacontainer,puma)
}


document.getElementById("puma").addEventListener("click",appendtopuma)



let appendtmcqueen = () => {

appendDatacontainer.innerHTML=null

appendDataToNavbar(appendDatacontainer,aLEXANDERMCQUEEN)
}


document.getElementById("alexandermcqueen").addEventListener("click",appendtmcqueen)





let appendtorebok = () => {

appendDatacontainer.innerHTML=null

appendDataToNavbar(appendDatacontainer,rebok)
}


document.getElementById("reebok").addEventListener("click",appendtorebok)

aLEXANDERMCQUEEN

