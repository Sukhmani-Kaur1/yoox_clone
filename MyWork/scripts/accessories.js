
    import {mensNavbar} from "../mynavbarComponents/mensNavbar.js"
    document.getElementById("myNavbar").innerHTML = mensNavbar();


 let appendDatacontainer = document.getElementById("appendDatacontainer")

import appendDataToNavbar from "../mynavbarComponents/appendProductsData.js"


let accedata  =
[
    {
        "name": "NEIL BARRETT Handbags ",
        "img": "https://www.yoox.com/images/items/45/45664620kq_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "BARRETT Handbags ",
        "price": "EUR 352,00 ",
        "size": "(CZK 8.695,46)"
    },
    {
        "name": "VALENTINO GARAVANI EUR 2.228,00 (CZK 55.038,28) 33% OFF EUR 1.483,00 ",
        "img": "https://www.yoox.com/images/items/45/45661366hh_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Handbags ",
        "price": "EUR 1.483,00 ",
        "size": "(CZK 36.634,55)"
    },
    {
        "name": "VALENTINO GARAVANI (CZK 22.479,73) 33% OFF EUR 607,00 (CZK 14.994,72)",
        "img": "https://www.yoox.com/images/items/45/45661318et_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Rucksacks & bumbags",
        "price": "  EUR 910,00",
        "size": "(CZK 14.994,72)"
    },
    {
        "name": "NEIL BARRETT ",
        "img": "https://www.yoox.com/images/items/45/45664589vk_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Across-body bags ",
        "price": " EUR 402,00",
        "size": " (CZK 9.930,61)"
    },
    {
        "name": "HERON PRESTON  ",
        "img": "https://www.yoox.com/images/items/45/45668280ot_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Across-body bags",
        "price": "EUR 203,00",
        "size": "(CZK 5.014,71)"
    },
    {
        "name": "VALENTINO GARAVANI ",
        "img": "https://www.yoox.com/images/items/45/45663907ee_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Rucksacks & bumbags",
        "price": "EUR 1.008,00 ",
        "size": "(CZK 16.600,42)"
    },
    {
        "name": "MAISON MARGIELA  ",
        "img": "https://www.yoox.com/images/items/45/45668662fo_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Rucksacks & bumbags",
        "price": " EUR 789,00",
        "size": " (CZK 19.490,67)"
    },
    {
        "name": "DSQUARED",
        "img": "https://www.yoox.com/images/items/46/46842986hx_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Hats ",
        "price": "EUR 128,00 ",
        "size": "(CZK 3.161,98) ONESIZE"
    },
    {
        "name": "DSQUARED",
        "img": "https://www.yoox.com/images/items/46/46842975bd_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Hats ",
        "price": " EUR 145,00 ",
        "size": "(CZK 3.581,94) ONESIZE"
    },
    {
        "name": "DOLCE & GABBANA  ",
        "img": "https://www.yoox.com/images/items/46/46841329wc_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Ties and bow ties",
        "price": "EUR 117,00 (",
        "size": "(CZK 2.890,25)"
    },
    {
        "name": "MISSONI ",
        "img": "https://www.yoox.com/images/items/46/46845752ro_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Scarves and foulards",
        "price": " EUR 72,00 ",
        "size": "(CZK 1.778,62)"
    },
    {
        "name": "ALEXANDER MCQUEEN  ",
        "img": "https://www.yoox.com/images/items/46/46849127kg_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Ties and bow ties",
        "price": "EUR 78,00",
        "size": "CZK 3.087,88) "
    },
    {
        "name": "GIORGIO ARMANI ",
        "img": "https://www.yoox.com/images/items/46/46843046lo_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Ties and bow ties ",
        "price": " EUR 112,00",
        "size": " (CZK 2.766,74)"
    },
    {
        "name": "MISSONI   (CZK 2.247,97) 29% OFF EUR 64,00 (CZK 1.580,99)",
        "img": "https://www.yoox.com/images/items/46/46845724nc_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Scarves and foulards",
        "price": "EUR 91,00",
        "size": "(CZK 1.580,99)"
    },
    {
        "name": "DOLCE & GABEUR ",
        "img": "https://www.yoox.com/images/items/46/46845122mr_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "BANA Ties and bow ties ",
        "price": "EUR 121,00",
        "size": " (CZK 2.989,06)"
    },
    {
        "name": "SALVATORE FERRAGAMO",
        "img": "https://www.yoox.com/images/items/46/46839565ci_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Leather belts ",
        "price": " EUR 383,00 ",
        "size": " (CZK 5.755,80)"
    },
    {
        "name": "VALENTINO GARAVANI ",
        "img": "https://www.yoox.com/images/items/46/46841555wg_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Leather belts",
        "price": "EUR 234,00 ",
        "size": "85 90 100"
    },
    {
        "name": "VALENTINO GARAVAN ",
        "img": "https://www.yoox.com/images/items/46/46842513sk_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "I Leather belts",
        "price": "EUR 410,00",
        "size": "90 95 100"
    },
    {
        "name": "MISSONI",
        "img": "https://www.yoox.com/images/items/46/46842513sk_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Leather belts  ",
        "price": "EUR 342,00",
        "size": "90"
    },
    {
        "name": "VERSACE JEANS COUTURE ",
        "img": "https://www.yoox.com/images/items/46/46847635dg_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Leather belts",
        "price": "EUR 98,00 ",
        "size": " 80 85 90 100 105 110"
    },
    {
        "name": "VERSACE JEANS COUTURE  (CZK 3.409,01) 36% OFF EUR 87,00 (CZK 2.149,16) ",
        "img": "https://www.yoox.com/images/items/46/46847632fe_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Leather belts ",
        "price": "EUR 138,00",
        "size": "85 90 95 100 105 110"
    },
    {
        "name": "VERSACE ",
        "img": "https://www.yoox.com/images/items/46/46847625kb_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "JEANS COUTURE ",
        "price": " EUR 73,00",
        "size": "85 90 95 100 110"
    },
    {
        "name": "MARIA BLACK ",
        "img": "https://www.yoox.com/images/items/50/50280782ph_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Tula Earring ",
        "price": " Gold HP Ear",
        "size": " $ 145.00"
    },
    {
        "name": "MARIA BLACK ",
        "img": "https://www.yoox.com/images/items/50/50281495na_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Tula Earring ",
        "price": "Silver ",
        "size": "$ 127.00"
    },
    {
        "name": "TIMEX ",
        "img": "https://www.yoox.com/images/items/50/50272809lx_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Wrist ",
        "price": "watches ",
        "size": "s $ 93.00"
    },
    {
        "name": "TIMEX ",
        "img": "https://www.yoox.com/images/items/50/50272762jo_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Wrist ",
        "price": "watches ",
        "size": "$ 117.00"
    },
    {
        "name": "TIMEX ",
        "img": "https://www.yoox.com/images/items/50/50272790xu_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Wrist ",
        "price": "watches ",
        "size": " $ 188.00"
    },
    {
        "name": "TIMEX",
        "img": "https://www.yoox.com/images/items/50/50272798ur_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Wrist ",
        "price": "watches ",
        "size": " $ 129.00"
    },
    {
        "name": "EMPORIO ARMANI ",
        "img": "https://www.yoox.com/images/items/46/46845843fb_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "EGS2910040 Necklaces ",
        "price": "$ 164.00",
        "size": " Necklaces "
    }
]
   
let bags = [
    {
        "name": "NEIL BARRETT Handbags ",
        "img": "https://www.yoox.com/images/items/45/45664620kq_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "BARRETT Handbags ",
        "price": "EUR 352,00 ",
        "size": "(CZK 8.695,46)"
    },
    {
        "name": "VALENTINO GARAVANI EUR 2.228,00 (CZK 55.038,28) 33% OFF EUR 1.483,00 ",
        "img": "https://www.yoox.com/images/items/45/45661366hh_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Handbags ",
        "price": "EUR 1.483,00 ",
        "size": "(CZK 36.634,55)"
    },
    {
        "name": "VALENTINO GARAVANI (CZK 22.479,73) 33% OFF EUR 607,00 (CZK 14.994,72)",
        "img": "https://www.yoox.com/images/items/45/45661318et_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Rucksacks & bumbags",
        "price": "  EUR 910,00",
        "size": "(CZK 14.994,72)"
    },
    {
        "name": "NEIL BARRETT ",
        "img": "https://www.yoox.com/images/items/45/45664589vk_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Across-body bags ",
        "price": " EUR 402,00",
        "size": " (CZK 9.930,61)"
    },
    {
        "name": "HERON PRESTON  ",
        "img": "https://www.yoox.com/images/items/45/45668280ot_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Across-body bags",
        "price": "EUR 203,00",
        "size": "(CZK 5.014,71)"
    },
    {
        "name": "VALENTINO GARAVANI ",
        "img": "https://www.yoox.com/images/items/45/45663907ee_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Rucksacks & bumbags",
        "price": "EUR 1.008,00 ",
        "size": "(CZK 16.600,42)"
    },
    {
        "name": "MAISON MARGIELA  ",
        "img": "https://www.yoox.com/images/items/45/45668662fo_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Rucksacks & bumbags",
        "price": " EUR 789,00",
        "size": " (CZK 19.490,67)"
    }
];

let accessories =  [
    {
        "name": "DSQUARED",
        "img": "https://www.yoox.com/images/items/46/46842986hx_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Hats ",
        "price": "EUR 128,00 ",
        "size": "(CZK 3.161,98) ONESIZE"
    },
    {
        "name": "DSQUARED",
        "img": "https://www.yoox.com/images/items/46/46842975bd_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Hats ",
        "price": " EUR 145,00 ",
        "size": "(CZK 3.581,94) ONESIZE"
    },
    {
        "name": "DOLCE & GABBANA  ",
        "img": "https://www.yoox.com/images/items/46/46841329wc_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Ties and bow ties",
        "price": "EUR 117,00 (",
        "size": "(CZK 2.890,25)"
    },
    {
        "name": "MISSONI ",
        "img": "https://www.yoox.com/images/items/46/46845752ro_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Scarves and foulards",
        "price": " EUR 72,00 ",
        "size": "(CZK 1.778,62)"
    },
    {
        "name": "ALEXANDER MCQUEEN  ",
        "img": "https://www.yoox.com/images/items/46/46849127kg_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Ties and bow ties",
        "price": "EUR 78,00",
        "size": "CZK 3.087,88) "
    },
    {
        "name": "GIORGIO ARMANI ",
        "img": "https://www.yoox.com/images/items/46/46843046lo_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Ties and bow ties ",
        "price": " EUR 112,00",
        "size": " (CZK 2.766,74)"
    },
    {
        "name": "MISSONI   (CZK 2.247,97) 29% OFF EUR 64,00 (CZK 1.580,99)",
        "img": "https://www.yoox.com/images/items/46/46845724nc_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Scarves and foulards",
        "price": "EUR 91,00",
        "size": "(CZK 1.580,99)"
    },
    {
        "name": "DOLCE & GABEUR ",
        "img": "https://www.yoox.com/images/items/46/46845122mr_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "BANA Ties and bow ties ",
        "price": "EUR 121,00",
        "size": " (CZK 2.989,06)"
    }
];

let belts = [
    {
        "name": "VALENTINO GARAVANI ",
        "img": "https://www.yoox.com/images/items/46/46841555wg_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Leather belts",
        "price": "EUR 234,00 ",
        "size": "85 90 100"
    },
    {
        "name": "VALENTINO GARAVAN ",
        "img": "https://www.yoox.com/images/items/46/46842513sk_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "I Leather belts",
        "price": "EUR 410,00",
        "size": "90 95 100"
    },
    {
        "name": "MISSONI",
        "img": "https://www.yoox.com/images/items/46/46842513sk_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Leather belts  ",
        "price": "EUR 342,00",
        "size": "90"
    },
    {
        "name": "VERSACE JEANS COUTURE ",
        "img": "https://www.yoox.com/images/items/46/46847635dg_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Leather belts",
        "price": "EUR 98,00 ",
        "size": " 80 85 90 100 105 110"
    },
    {
        "name": "VERSACE JEANS COUTURE",
        "img": "https://www.yoox.com/images/items/46/46847632fe_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Leather belts ",
        "price": "EUR 138,00",
        "size": "85 90 95 100 105 110"
    },
    {
        "name": "VERSACE ",
        "img": "https://www.yoox.com/images/items/46/46847625kb_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "JEANS COUTURE ",
        "price": " EUR 73,00",
        "size": "85 90 95 100 110"
    }
]
appendDataToNavbar(appendDatacontainer,accedata)

let alldata = () => {

    appendDatacontainer.innerHTML=null

    appendDataToNavbar(appendDatacontainer,accedata)
}


document.getElementById("alldata").addEventListener("click",alldata)




let bagsData = () => {
    appendDatacontainer.innerHTML=null
    appendDataToNavbar(appendDatacontainer,accessories)
}


document.getElementById("bags").addEventListener("click",bags)



let hatsData = () => {

appendDatacontainer.innerHTML=null

appendDataToNavbar(appendDatacontainer,accessories)
}


document.getElementById("hats").addEventListener("click",hatsData)





let betsData = () => {

appendDatacontainer.innerHTML=null

appendDataToNavbar(appendDatacontainer,belts)
}


document.getElementById("belts").addEventListener("click",betsData)


let jwelery = [
    {
        "name": "MARIA BLACK ",
        "img": "https://www.yoox.com/images/items/50/50280782ph_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Tula Earring ",
        "price": " Gold HP Ear",
        "size": " $ 145.00"
    },
    {
        "name": "MARIA BLACK ",
        "img": "https://www.yoox.com/images/items/50/50281495na_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Tula Earring ",
        "price": "Silver ",
        "size": "$ 127.00"
    },
    {
        "name": "TIMEX ",
        "img": "https://www.yoox.com/images/items/50/50272809lx_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Wrist ",
        "price": "watches ",
        "size": "s $ 93.00"
    },
    {
        "name": "TIMEX ",
        "img": "https://www.yoox.com/images/items/50/50272762jo_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Wrist ",
        "price": "watches ",
        "size": "$ 117.00"
    },
    {
        "name": "TIMEX ",
        "img": "https://www.yoox.com/images/items/50/50272790xu_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Wrist ",
        "price": "watches ",
        "size": " $ 188.00"
    },
    {
        "name": "TIMEX",
        "img": "https://www.yoox.com/images/items/50/50272798ur_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Wrist ",
        "price": "watches ",
        "size": " $ 129.00"
    },
    {
        "name": "EMPORIO ARMANI ",
        "img": "https://www.yoox.com/images/items/46/46845843fb_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "EGS2910040 Necklaces ",
        "price": "$ 164.00",
        "size": " Necklaces "
    }
]


let jweleryData = () => {

appendDatacontainer.innerHTML=null

appendDataToNavbar(appendDatacontainer,jwelery)
}


document.getElementById("Jewellery").addEventListener("click",jweleryData)
