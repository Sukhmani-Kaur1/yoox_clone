
    import {mensNavbar} from "../mynavbarComponents/mensNavbar.js"
    document.getElementById("myNavbar").innerHTML = mensNavbar();


    let beforecartobj = JSON.parse(localStorage.getItem("beforeCart"));

    document.getElementById("beforeImage").src=beforecartobj.img

    document.getElementById("namebefo").innerText =beforecartobj.name
    document.getElementById("parabefo").innerText =beforecartobj.para
    document.getElementById("pricebefo").innerText =beforecartobj.price


    let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    let dreamData = JSON.parse(localStorage.getItem("dreamData")) || [];

    let addbefo = () => {
        alert('Item Added To Shopping Bag');
        cartData.push(beforecartobj)
        // console.log(beforecartobj);
        localStorage.setItem("cartData",JSON.stringify(cartData))
    }

    document.getElementById("addbefo").addEventListener("click", addbefo)


    
    let adddea = () => {
    alert('Item Added To Dream Box')

       dreamData.push(beforecartobj)

        localStorage.setItem("dreamData",JSON.stringify(dreamData))
    
    }

    document.getElementById("adddea").addEventListener("click", adddea)



   