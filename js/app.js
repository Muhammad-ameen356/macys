const mainContainer = document.getElementById("mainContainer");
const submenu = document.getElementById("sub_menu");
const menu = document.getElementById("menu");
const menu_li = document.querySelector(".menu_li");
const body = document.getElementById("body");
const complete_card = document.getElementById("complete_card");
const result_count = document.getElementById("result_count");
const scrollTop_button = document.getElementById("scrollTop_button");

scrollTop_button.style.display = "none";

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
  let products = {};

  await fetch("https://dummyjson.com/products/category/mens-shirts?limit=15") //api for the get request
    .then((response) => response.json())
    .then((data) => (products = data));
  console.log(products);
  let html = "";

  products?.products.forEach((docs) => {
    let salePrice =
      docs?.price - (docs?.price * docs?.discountPercentage) / 100;
    html += `<div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 30px;">
              <div class="card_img">
                  <img src="${docs?.thumbnail}" alt="loading" />
              </div>
              <div class="multiple_img">
              
              <div class="multiple_img1">
                  <img src="./assets/images/img1.jpeg" alt="" />
              </div>
              <div class="multiple_img1"><img src="./assets/images/img1.jpeg" alt="" /></div>
              <div class="multiple_img1"><img src="./assets/images/img1.jpeg" alt="" /></div>
              </div>
              <div class="titleAndDescription">
                  <p>${docs?.title}.</p>
                  <p>${docs?.description}</p>
                  <p>Limited-Time Special</p>
                  <p>PKR ${docs?.price}</p>
                  <p>Sale <span style="color: #e01a2b; font-weight: bold;"> 
                    PKR ${salePrice.toFixed(3)}
                  </span></p>
                  <p>Discount: ${docs.discountPercentage}%</p>
                  <p>&#9733;&#9733;&#9733;&#9733;&#9733; ${docs?.rating}</p>
              </div>
            </div>`;
  });
  complete_card.innerHTML = html;
  result_count.innerHTML = products?.total;
}

fetchText();

function scrollToTop() {
  window.scrollTo(0, 0);
}

function onScrollRun() {
  if (window.pageYOffset > 200) {
    scrollTop_button.style.display = "block";
  } else {
    scrollTop_button.style.display = "none";
  }
}

console.log(window.pageYOffset);
