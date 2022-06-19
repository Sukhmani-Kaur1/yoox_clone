import {navbar} from "../navbar.js"
document.getElementById("Nav").innerHTML=navbar()

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
let getData = JSON.parse(localStorage.getItem("dreamData"));

let arr = JSON.parse(localStorage.getItem("Data")) || [];
let container = document.getElementById("bag-items");
//add conditions for null data
append(getData);
function append(data) {
  data.forEach((el, i) => {
    let div = document.createElement("div");
    div.className = "box-fav";
    let img = document.createElement("img");
    img.src = el.image;
    let title = document.createElement("h4");
    title.textContent = el.name;
    let remove = document.createElement("button");
    remove.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    remove.addEventListener("click", function () {
      data.splice(i, 1);
      localStorage.setItem("dreamData", JSON.stringify(data));
      window.location.reload();
    });
    let addCart = document.createElement("a");
    addCart.textContent = "ADD TO CART";
    //   addCart.href="./cart/cart.html"
    addCart.addEventListener("click", function () {
      if (!arr.includes(el)) {
        arr.push(el);
        localStorage.setItem("cartData", JSON.stringify(arr));
      } else {
        alert("already in the cart");
      }
      // console.log(arr)
    });
    div.append(img, remove, title, addCart);
    container.append(div);
  });
}
let selection = document.getElementById("select");

selection.addEventListener("change", function () {
  let input = selection.value;
  console.log(input);
});
