const mainContainer = document.getElementById("mainContainer");
const submenu = document.getElementById("sub_menu");
const menu = document.getElementById("menu");
const menu_li = document.querySelector(".menu_li");
const body = document.getElementById("body");
const complete_card = document.getElementById("complete_card");

console.log(menu_li);

function showSubMenu() {
  submenu.style.display = "flex";
  menu.style.border = "0px";
  body.style.backgroundColor = "#e3e3e3";
}

function hideSubMenu() {
  submenu.style.display = "none";
  menu.style.borderBottom = "1px solid #a4a4a4";
  body.style.backgroundColor = "transparent";
}

async function fetchText() {
  console.log("fn run");
  let products = [];

  await fetch("https://dummyjson.com/products/category/womens-dresses?limit=15") //api for the get request
    .then((response) => response.json())
    .then((data) => (products = data.products));
  console.log(products);
  let html = "";

  products.forEach((docs) => {
    console.log(docs);
    html += `<div class="col-lg-4"><div class="card_img">
                <img src="${docs?.thumbnail}" alt="" />
            </div>
            <div class="multiple_img">
            
            <div class="multiple_img1">
                <img src="./assets/images/img1.jpeg" alt="" />
            </div>
            <div class="multiple_img1"></div>
            <div class="multiple_img1"></div>
            </div>
            <div class="titleAndDescription">
                <p>${docs?.title}.</p>
                <p>${docs?.description}</p>
                <p>Limited-Time Special</p>
                <p>PKR ${docs?.price}</p>
                <p>Sale PKR 5,406.34</p>
                <p>Discount: ${docs.discountPercentage}%</p>
                <p>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            </div></div>`;
  });
  complete_card.innerHTML = html;
}

fetchText();
