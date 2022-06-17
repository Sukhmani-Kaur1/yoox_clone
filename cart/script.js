let container = document.getElementById("bag_items");
let getData = JSON.parse(localStorage.getItem("Data")) || [];
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
    // document.getElementById("container").style.display="none";
    let img = document.createElement("img");

    img.src = `https://media2.giphy.com/media/3oKHWvON3jhmmf38s0/200.webp?cid=ecf05e47n8tkrtgq7c199jmi26iw0wkmiit0tx0r8u15ldkr&rid=200.webp&ct=g`;
    container.append(img);
    // container.style.textAlign="center"
    img.className = "whenNull";
    document.getElementById("taxes").textContent = `US$ ${0}`;
    document.getElementById("shipping").textContent = `US$ ${0}`;
  }
  data.forEach((el, i) => {
    let div = document.createElement("div");
    div.className = "box-cart";
    let img = document.createElement("img");
    img.src = el.img;
    let set1 = document.createElement("div");
    let set2 = document.createElement("div");
    let title = document.createElement("h4");
    title.textContent = el.title;
    let type = document.createElement("p");
    type.textContent = el.type;
    set1.append(title, type);
    set2.append(img, set1);
    set2.className = "set2box";
    let color = document.createElement("p");
    color.innerText = el.color;
    let size = document.createElement("p");
    size.textContent = el.size;
    //remove and quantity
    let set3 = document.createElement("div");
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
      localStorage.setItem("Data", JSON.stringify(data));
    });
    let remove = document.createElement("button");
    set3.append(quantity, remove);
    set3.id = "set3-box";
    remove.innerHTML = `<i class="fa-solid fa-xmark"></i>${"REMOVE"}`;
    remove.addEventListener("click", function () {
      data.splice(i, 1);
      event.target.parentNode.remove();
      localStorage.setItem("Data", JSON.stringify(data));
      window.location.reload();
    });
    let prize = document.createElement("h4");
    prize.innerText = `US$ ${el.prize}`;
    div.append(set2, color, size, set3, prize);
    container.append(div);
    document.getElementById("count").textContent = `(${count})`;
  });
}

let quantity = document.querySelector("select");
for (let i of getData) {
  itemVal = quantity.value;
  i.quan = itemVal;
  total += Number(i.prize) * Number(i.quan);
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
    total += Number(i.prize) * Number(i.quan);
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
