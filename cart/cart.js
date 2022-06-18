let container = document.getElementById("bag_items");
let getData = JSON.parse(localStorage.getItem("cartData")) || [];
let total = 0;
let taxes = 73;
let shipping = 26;
let promo = 0;
let order_total = 0;
let count = 0;

document.getElementById("taxes").textContent = `US$ ${taxes}`;
document.getElementById("shipping").textContent = `US$ ${shipping}`;
//add conditions for null data
append(getData);
function append(data) {
  count = data.length;
  if (count === 0) {
    let div = document.createElement("div");
    div.id = "afterBox";
    let img = document.createElement("img");

    img.src = `https://cdn.dribbble.com/users/2059463/screenshots/4828452/polizas_gif.gif`;
    div.append(img);
    container.append(div);
    img.className = "whenNull";
    document.getElementById("taxes").textContent = `US$ ${0}`;
    document.getElementById("shipping").textContent = `US$ ${0}`;
  }
  data.forEach((el, i) => {
    let div = document.createElement("div");
    div.className = "box-cart";
    let img = document.createElement("img");
    img.src = el.img;
    let set2 = document.createElement("div");
    let title = document.createElement("h4");
    title.textContent = el.name;
    set2.append(img, title);
    set2.className = "set2box";
    let size = document.createElement("p");
    size.textContent = el.size;
    //remove and quantity
    let quantity = document.createElement("select");
    quantity.className = "form-select";
    quantity.innerHTML = `
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>`;
    quantity.addEventListener("change", function () {
      itemVal = quantity.value;
      el.quan = itemVal;
      calculate(data);
      localStorage.setItem("cartData", JSON.stringify(data));
    });
    let remove = document.createElement("button");
    remove.innerHTML = `<i class="fa-solid fa-xmark"></i>${"REMOVE"}`;
    remove.addEventListener("click", function () {
      data.splice(i, 1);
      localStorage.setItem("cartData", JSON.stringify(data));
      window.location.reload();
    });
    let prize = document.createElement("h4");
    prize.innerText = `US$ ${el.price}`;
    div.append(set2, size, quantity, prize, remove);
    container.append(div);
    document.getElementById("count").textContent = `(${count})`;
  });
}

let quantity = document.querySelector("select");
for (let i of getData) {
  itemVal = quantity.value;
  i.quan = itemVal;
  let price = i.price.replace("$", " ");
  price = price.trim();
  total += Number(price) * Number(i.quan);
  // console.log(Number(price))
  document.getElementById("totalForItems").textContent = `US$ ${total}`;
  order_total = total + shipping + taxes;
  document.getElementById("order_total").textContent = `US$ ${order_total}`;
}

function calculate(data) {
  let sum = 0;
  total = 0;
  for (let i of data) {
    let num = Number(i.quan);
    sum += num;
    let price = i.price.replace("$", " ");
    price = price.trim();
    total += Number(price) * Number(i.quan);
    order_total = total + shipping + taxes;
  }
  // console.log(order_total)
  // console.log(total)
  document.getElementById("count").textContent = `(${sum})`;
  document.getElementById("totalForItems").textContent = `US$ ${total}`;
  document.getElementById("order_total").textContent = `US$ ${order_total}`;
}
let CodeInput = document.getElementById("promoQuery");
document.getElementById("promoApply").addEventListener("click", function () {
  promoCheck(CodeInput, order_total);
});
function promoCheck(CodeInput, order_total) {
  if (CodeInput.value === "YOOX10" || CodeInput.value === "yoox10") {
    promo = order_total / 10;
    document.getElementById("onCorrect").style.display = "block";
    document.getElementById("onWrong").style.display = "none";
    CodeInput.style.borderBottom = "2px solid rgb(36, 228, 36)";
    document.getElementById("promo").textContent = `- US$ ${promo}`;
    order_total = total + taxes + shipping - promo;
    document.getElementById("order_total").textContent = `US$ ${order_total}`;
  } else {
    document.getElementById("onWrong").style.display = "block";
    document.getElementById("onCorrect").style.display = "none";
    CodeInput.style.borderBottom = "2px solid orange";
  }
}
