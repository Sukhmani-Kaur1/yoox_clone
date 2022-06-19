
    import {mensNavbar} from "../mynavbarComponents/mensNavbar.js"
    document.getElementById("myNavbar").innerHTML = mensNavbar();


    let coatJacketData =  [
    {        "name": "GMS-75 ",

        "img": "https://www.yoox.com/images/items/16/16083685hf_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Cloaks  ",
        "price": "$ 95.00 ",
        "size": "S"
    },
    {        "name": "GMS-75 ",

        "img": "https://www.yoox.com/images/items/16/16131480lx_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Denim jackets ",
        "price": " $ 102.00",
        "size": " S M L XL XXL"
    },
    {        "name": "GMS-75 ",
        "name": "GMS-75 ",

        "img": "https://www.yoox.com/images/items/49/49765596ft_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "jackets ",
        "price": " $ 349.00 ",
        "size": "34"
    },
    {        "name": "BRUNELLO CUCINELLI ",

        "img": "https://www.yoox.com/images/items/16/16098157lr_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Jackets ",
        "price": "$ 688.00",
        "size": "M"
    },
    {        "name": "BRUNELLO CUCINELLI ",

        "img": "https://www.yoox.com/images/items/16/16098249lc_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Jackets ",
        "price": "688.00",
        "size": "M"
    },
    {        "name": "BRUNELLO CUCINELLI ",

        "img": "https://www.yoox.com/images/items/49/49635909gd_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Blazers ",
        "price": " $ 493.00 ",
        "size": "40"
    },
    {
        "name": "BOGLIOLI ",
        "img": "https://www.yoox.com/images/items/49/49655905sh_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Blazers ",
        "price": " $ 477.00 ",
        "size": "l"
    },
    {
        "name": "GMS-75 ",
        "img": "https://www.yoox.com/images/items/16/16134848cs_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Coats",
        "price": " $ 1,289.00 ",
        "size": "M XL"
    },
    {
        "name": "CANALI Blazers $ 1,986.00 35% OFF",
        "img": "https://www.yoox.com/images/items/49/49768184tm_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "",
        "price": " $ 1,274.00 ",
        "size": "M"
    },
    {
        "name": "CANALI",
        "img": "https://www.yoox.com/images/items/49/49768184tm_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Blazers",
        "price": " $ 1,274.00",
        "size": "38"
    },
    {
        "name": "GIORGIO BRATO  ",
        "img": "https://www.yoox.com/images/items/16/16130510xp_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Coats ",
        "price": "$ 1,742.00",
        "size": ""
    },
    {
        "name": "BRUNELLO CUCINELLI ",
        "img": "https://www.yoox.com/images/items/49/49764130at_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Blazers ",
        "price": "$ 2,065.00 ",
        "size": ""
    },
    {
        "name": "SARTORIO ",
        "img": "https://www.yoox.com/images/items/49/49769954du_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Blazers ",
        "price": " $ 2,398.00 ",
        "size": "40"
    }
]
    let jeansDenim = [ {
        "name": "Z ZEGNA ",
        "img": "https://www.yoox.com/images/items/13/13793781lx_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Denim pants",
        "price": "$ 354.00 ",
        "size": " 34"
    },
    {
        "name": "VALENTINO ",
        "img": "https://www.yoox.com/images/items/13/13795183lb_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Denim pants",
        "price": " $ 919.00",
        "size": "29 34 38   "
    },
    {
        "name": "NUDIE JEANS",
        "img": "https://www.yoox.com/images/items/13/13798730ig_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "",
        "price": "$ 90.00",
        "size": "36 38 40"
    },
    {
        "name": "JACOB COHЁN ",
        "img": "https://www.yoox.com/images/items/13/13787873ll_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Denim pants",
        "price": " $ 292.00 ",
        "size": "32 36 "
    },
    {
        "name": "EMPORIO ARMANI ",
        "img": "https://www.yoox.com/images/items/49/49765596ft_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Denim pants",
        "price": "$ 139.00 ",
        "size": "36 40"
    },
    {
        "name": "LANVIN ",
        "img": "https://www.yoox.com/images/items/13/13792459rg_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Denim pants",
        "price": "$ 486.00 ",
        "size": "29 31"
    },
    {
        "name": "DOLCE & GABBANA  ",
        "img": "https://www.yoox.com/images/items/13/13797543bv_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Denim pants",
        "price": "$ 866.00",
        "size": "30"
    },
    {
        "name": "UNDERCOVER",
        "img": "https://www.yoox.com/images/items/13/13812788xo_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Denim pants ",
        "price": "$ 484.00 ",
        "size": " 4"
    },
    {
        "name": "BALMAIN ",
        "img": "https://www.yoox.com/images/items/13/13796977oe_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Denim pants ",
        "price": " $ 712.00 ",
        "size": "30"
    },
    {
        "name": "DONDUP ",
        "img": "https://www.yoox.com/images/items/13/13798609ao_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Denim pants",
        "price": "$ 182.00 ",
        "size": "34"
    },
    {
        "name": "TOM FORD ",
        "img": "https://www.yoox.com/images/items/13/13796950mn_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Denim pants",
        "price": " $ 698.00 ",
        "size": "32"
    },
    {
        "name": "ANDERSSON BELL ",
        "img": "https://www.yoox.com/images/items/13/13789701it_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Denim pants ",
        "price": " $ 392.00 ",
        "size": "L M"
    }
];
    let jumpsuits = [{
        "name": "BIKKEMBERGS ",
        "img": "https://www.yoox.com/images/items/54/54184003fx_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Athletic outfits",
        "price": "$ 249.00",
        "size": " XL"
    },
    {
        "name": "ISABEL BENENATO ",
        "img": "https://www.yoox.com/images/items/54/54184851ie_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Jumpsuits/one pieces ",
        "price": "$ 918.00",
        "size": " M"
    },
    {
        "name": "ARENA ",
        "img": "https://www.yoox.com/images/items/54/54184047pl_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Athletic outfits ",
        "price": " $ 70.00",
        "size": " M L"
    },
    {
        "name": "ARENA ",
        "img": "https://www.yoox.com/images/items/54/54184054lq_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Athletic outfits",
        "price": " $ 78.00 S ",
        "size": "XXL"
    },
    {
        "name": "ARENA ",
        "img": "https://www.yoox.com/images/items/54/54183949bt_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Athletic outfits ",
        "price": "$ 124.00 ",
        "size": "L"
    },
    {
        "name": "TOPMAN Denim overalls $28W-32L 30W-32L 32W-32L 34W-32L 36W-32L",
        "img": "https://www.yoox.com/images/items/54/54183797ek_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Denim pants",
        "price": "$ 134.00 ",
        "size": "M L "
    },
    {
        "name": "BIKKEMBERGS",
        "img": "https://www.yoox.com/images/items/54/54184422st_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Athletic outfits ",
        "price": "$ 448.00",
        "size": "S M L"
    },
    {
        "name": "BIKKEMBERGS",
        "img": "https://www.yoox.com/images/items/54/54184423oi_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Athletic outfits  ",
        "price": "$ 480.00",
        "size": " S M L"
    }
]
    let shirtsData = [
    {
        "name": "ALESSANDRO ",
        "img": "https://www.yoox.com/images/items/12/12779127tg_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Linen shirts",
        "price": "$ 128.00",
        "size": "M L S"
    },
    {
        "name": "ISAIA  ",
        "img": "https://www.yoox.com/images/items/12/12821276wa_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Checked shirts",
        "price": "$ 460.00",
        "size": "M L S"
    },
    {
        "name": "ISAIA ",
        "img": "https://www.yoox.com/images/items/12/12821350mo_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Checked shirts ",
        "price": "$ 361.00 ",
        "size": "M L "
    },
    {
        "name": "APROPOS",
        "img": "https://www.yoox.com/images/items/12/12833805kr_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Linen shirts ",
        "price": "$ 77.00 ",
        "size": "M L S"
    },
    {
        "name": "SELECTED HOMME ",
        "img": "https://www.yoox.com/images/items/12/12784170bt_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Solid color ",
        "price": " $ 71.00",
        "size": "M XL"
    },
    {
        "name": "SELECTED HOMME",
        "img": "https://www.yoox.com/images/items/12/12782891ro_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Linen shirts",
        "price": " $ 83.00",
        "size": "M L S"
    },
    {
        "name": "LARDINI",
        "img": "https://www.yoox.com/images/items/12/12811426km_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Patterned shirts",
        "price": "$ 117.00",
        "size": "XXXL XL "
    },
    {
        "name": "CALIBAN",
        "img": "https://www.yoox.com/images/items/12/12823243ho_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Solid colo",
        "price": "$ 78.00",
        "size": "M XL"
    },
    {
        "name": "8 BY YOOX ",
        "img": "https://www.yoox.com/images/items/12/12814895ib_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Linen shirts",
        "price": " $ 90.00",
        "size": "M XL"
    },
    {
        "name": "BARBOUR  ",
        "img": "https://www.yoox.com/images/items/12/12630023mc_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Checked shirts",
        "price": "$ 100.00 ",
        "size": "XL"
    }
]
     let allData = [
    { "name": "BOGLIOLI ",
        "img": "https://www.yoox.com/images/items/16/16083685hf_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Cloaks  ",
        "price": "$ 95.00 ",
        "size": "S"
    },
    { "name": "BOGLIOLI ",
        "img": "https://www.yoox.com/images/items/16/16131480lx_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Denim jackets ",
        "price": " $ 102.00",
        "size": " S M L XL XXL"
    },
    { "name": "BOGLIOLI ",
        "img": "https://www.yoox.com/images/items/49/49765596ft_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "jackets ",
        "price": " $ 349.00 ",
        "size": "34"
    },
    { "name": "BOGLIOLI ",
        "img": "https://www.yoox.com/images/items/16/16098157lr_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Jackets ",
        "price": "$ 688.00",
        "size": "M"
    },
    {   "name": "BOGLIOLI ",
        "img": "https://www.yoox.com/images/items/16/16098249lc_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Jackets ",
        "price": "688.00",
        "size": "M"
    },
    {    "name": "BOGLIOLI ",
        "img": "https://www.yoox.com/images/items/49/49635909gd_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Blazers ",
        "price": " $ 493.00 ",
        "size": "40"
    },
    {
        "name": "BOGLIOLI ",
        "img": "https://www.yoox.com/images/items/49/49655905sh_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Blazers ",
        "price": " $ 477.00 ",
        "size": "l"
    },
    {
        "name": "GMS-75 ",
        "img": "https://www.yoox.com/images/items/16/16134848cs_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Coats",
        "price": " $ 1,289.00 ",
        "size": "M XL"
    },
    {
        "name": "CANALI Blazers $ 1,986.00 35% OFF",
        "img": "https://www.yoox.com/images/items/49/49768184tm_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "",
        "price": " $ 1,274.00 ",
        "size": "M"
    },
    {
        "name": "CANALI",
        "img": "https://www.yoox.com/images/items/49/49768184tm_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Blazers",
        "price": " $ 1,274.00",
        "size": "38"
    },
    {
        "name": "GIORGIO BRATO  ",
        "img": "https://www.yoox.com/images/items/16/16130510xp_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Coats ",
        "price": "$ 1,742.00",
        "size": ""
    },
    {
        "name": "BRUNELLO CUCINELLI ",
        "img": "https://www.yoox.com/images/items/49/49764130at_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Blazers ",
        "price": "$ 2,065.00 ",
        "size": ""
    },
    {
        "name": "SARTORIO ",
        "img": "https://www.yoox.com/images/items/49/49769954du_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Blazers ",
        "price": " $ 2,398.00 ",
        "size": "40"
    },
    {
        "name": "Z ZEGNA ",
        "img": "https://www.yoox.com/images/items/13/13793781lx_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Denim pants",
        "price": "$ 354.00 ",
        "size": " 34"
    },
    {
        "name": "VALENTINO ",
        "img": "https://www.yoox.com/images/items/13/13795183lb_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Denim pants",
        "price": " $ 919.00",
        "size": "29 34 38   "
    },
    {
        "name": "NUDIE JEANS",
        "img": "https://www.yoox.com/images/items/13/13798730ig_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "",
        "price": "$ 90.00",
        "size": "36 38 40"
    },
    {
        "name": "JACOB COHЁN ",
        "img": "https://www.yoox.com/images/items/13/13787873ll_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Denim pants",
        "price": " $ 292.00 ",
        "size": "32 36 "
    },
               {
        "name": "EMPORIO ARMANI ",
        "img": "https://www.yoox.com/images/items/49/49765596ft_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Denim pants",
        "price": "$ 139.00 ",
        "size": "36 40"
    },
    {
        "name": "LANVIN ",
        "img": "https://www.yoox.com/images/items/13/13792459rg_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Denim pants",
        "price": "$ 486.00 ",
        "size": "29 31"
    },
    {
        "name": "DOLCE & GABBANA  ",
        "img": "https://www.yoox.com/images/items/13/13797543bv_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Denim pants",
        "price": "$ 866.00",
        "size": "30"
    },
    {
        "name": "UNDERCOVER",
        "img": "https://www.yoox.com/images/items/13/13812788xo_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Denim pants ",
        "price": "$ 484.00 ",
        "size": " 4"
    },
    {
        "name": "BALMAIN ",
        "img": "https://www.yoox.com/images/items/13/13796977oe_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Denim pants ",
        "price": " $ 712.00 ",
        "size": "30"
    },
    {
        "name": "DONDUP ",
        "img": "https://www.yoox.com/images/items/13/13798609ao_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Denim pants",
        "price": "$ 182.00 ",
        "size": "34"
    },
    {
        "name": "TOM FORD ",
        "img": "https://www.yoox.com/images/items/13/13796950mn_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Denim pants",
        "price": " $ 698.00 ",
        "size": "32"
    },
    {
        "name": "ANDERSSON BELL ",
        "img": "https://www.yoox.com/images/items/13/13789701it_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Denim pants ",
        "price": " $ 392.00 ",
        "size": "L M"
    },
    {
        "name": "MOORER ",
        "img": "https://www.yoox.com/images/items/54/54184913io_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Athletic outfits",
        "price": "$ 953.00 ",
        "size": "40"
    },
    {
        "name": "BIKKEMBERGS ",
        "img": "https://www.yoox.com/images/items/54/54184003fx_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Athletic outfits",
        "price": "$ 249.00",
        "size": " XL"
    },
    {
        "name": "ISABEL BENENATO ",
        "img": "https://www.yoox.com/images/items/54/54184851ie_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Jumpsuits/one pieces ",
        "price": "$ 918.00",
        "size": " M"
    },
    {
        "name": "ARENA ",
        "img": "https://www.yoox.com/images/items/54/54184047pl_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Athletic outfits ",
        "price": " $ 70.00",
        "size": " M L"
    },
    {
        "name": "ARENA ",
        "img": "https://www.yoox.com/images/items/54/54184054lq_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Athletic outfits",
        "price": " $ 78.00 S ",
        "size": "XXL"
    },
    {
        "name": "ARENA ",
        "img": "https://www.yoox.com/images/items/54/54183949bt_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Athletic outfits ",
        "price": "$ 124.00 ",
        "size": "L"
    },
    {
        "name": "TOPMAN Denim overalls $28W-32L 30W-32L 32W-32L 34W-32L 36W-32L",
        "img": "https://www.yoox.com/images/items/54/54183797ek_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Denim pants",
        "price": "$ 134.00 ",
        "size": "M L "
    },
    {
        "name": "BIKKEMBERGS",
        "img": "https://www.yoox.com/images/items/54/54184422st_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Athletic outfits ",
        "price": "$ 448.00",
        "size": "S M L"
    },
    {
        "name": "BIKKEMBERGS",
        "img": "https://www.yoox.com/images/items/54/54184423oi_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Athletic outfits  ",
        "price": "$ 480.00",
        "size": " S M L"
    },
    {
        "name": "CHARLY ",
        "img": "https://www.yoox.com/images/items/12/12831540qd_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Linen shirts",
        "price": "$ 145.00",
        "size": "S M L "
    },
    {
        "name": "ALESSANDRO ",
        "img": "https://www.yoox.com/images/items/12/12779127tg_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Linen shirts",
        "price": "$ 128.00",
        "size": "M L S"
    },
    {
        "name": "ISAIA  ",
        "img": "https://www.yoox.com/images/items/12/12821276wa_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Checked shirts",
        "price": "$ 460.00",
        "size": "M L S"
    },
    {
        "name": "ISAIA ",
        "img": "https://www.yoox.com/images/items/12/12821350mo_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Checked shirts ",
        "price": "$ 361.00 ",
        "size": "M L "
    },
    {
        "name": "APROPOS",
        "img": "https://www.yoox.com/images/items/12/12833805kr_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Linen shirts ",
        "price": "$ 77.00 ",
        "size": "M L S"
    },
    {
        "name": "SELECTED HOMME ",
        "img": "https://www.yoox.com/images/items/12/12784170bt_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Solid color ",
        "price": " $ 71.00",
        "size": "M XL"
    },
    {
        "name": "SELECTED HOMME",
        "img": "https://www.yoox.com/images/items/12/12782891ro_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Linen shirts",
        "price": " $ 83.00",
        "size": "M L S"
    },
    {
        "name": "LARDINI",
        "img": "https://www.yoox.com/images/items/12/12811426km_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": " Patterned shirts",
        "price": "$ 117.00",
        "size": "XXXL XL "
    },
    {
        "name": "CALIBAN",
        "img": "https://www.yoox.com/images/items/12/12823243ho_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Solid colo",
        "price": "$ 78.00",
        "size": "M XL"
    },
    {
        "name": "8 BY YOOX ",
        "img": "https://www.yoox.com/images/items/12/12814895ib_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Linen shirts",
        "price": " $ 90.00",
        "size": "M XL"
    },
    {
        "name": "BARBOUR  ",
        "img": "https://www.yoox.com/images/items/12/12630023mc_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center",
        "para": "Checked shirts",
        "price": "$ 100.00 ",
        "size": "XL"
    }
]



let appendDatacontainer = document.getElementById("appendDatacontainer")

import appendDataToNavbar from "../mynavbarComponents/appendProductsData.js"

appendDataToNavbar(appendDatacontainer,allData)

let activewear = () => {
    appendDatacontainer.innerHTML=null

    appendDataToNavbar(appendDatacontainer,allData)
}

document.getElementById("activewear").addEventListener("click",activewear)

let coatsAndJackets = () => {
    appendDatacontainer.innerHTML=null

    appendDataToNavbar(appendDatacontainer,jumpsuits)
}


document.getElementById("coatsAndJackets").addEventListener("click",coatsAndJackets)


let jeansAndDenim = () => {
    appendDatacontainer.innerHTML=null

    appendDataToNavbar(appendDatacontainer,jeansDenim)
}

document.getElementById("jeansAndDenim").addEventListener("click",jeansAndDenim)


let Jumpsuits = () => {
    appendDatacontainer.innerHTML=null

    appendDataToNavbar(appendDatacontainer,jumpsuits)
}
document.getElementById("Jumpsuits").addEventListener("click",Jumpsuits)



let pants = () => {
    appendDatacontainer.innerHTML=null

    appendDataToNavbar(appendDatacontainer,jeansDenim)
}
document.getElementById("pants").addEventListener("click",pants)


let shirts = () => {
    appendDatacontainer.innerHTML=null

    appendDataToNavbar(appendDatacontainer,shirtsData)
}

document.getElementById("shirts").addEventListener("click",shirts)


let suitsBlzers  = () => {
    appendDatacontainer.innerHTML=null

    appendDataToNavbar(appendDatacontainer,coatJacketData)

}

document.getElementById("suitsBlzers").addEventListener("click",suitsBlzers)

