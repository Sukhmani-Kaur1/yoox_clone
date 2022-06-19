import {navbar} from "../yoox_clone/navbar.js"
document.getElementById("Nav").innerHTML=navbar();

let cartCount=JSON.parse(localStorage.getItem("cartData"))
document.getElementById("bag_count").innerText=cartCount.length
console.log(cartCount.length)

let favCount=JSON.parse(localStorage.getItem("dreamData"))
document.getElementById("fav_count").innerText=favCount.length
console.log(favCount.length)



document.getElementById("click_btn").addEventListener("click",clickme)
let clicked=false
function clickme(){
    if(clicked==false){
        clicked=true;
    }
    else{
        clicked=false
    }

        if(clicked){
            document.getElementById("search_bar").style.display="block";
        }  
        else{
            document.getElementById("search_bar").style.display="none";
        }
}

document.getElementById("cust_care").addEventListener("click",customerCare)
let clicked_2=false;
function customerCare(){
    if(clicked_2==false){
        clicked_2=true
    }
    else{
        clicked_2=false;
    }

        if(clicked_2){
            document.getElementById("customer_care").style.display="block";
        }
        else{
            document.getElementById("customer_care").style.display="none";
        }
}