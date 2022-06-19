// import {navbar} from "../yoox_clone/navbar.js"
// document.getElementById("Nav").innerHTML=navbar()

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
