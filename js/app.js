let menu = {
  blue: {
    name: "Blue",
    price: 110,
    img: "images/rs__img1.svg",
    amount: 0,
    get totalSum() {
      return this.price * this.amount;
    },
  },
  black: {
    name: "Black",
    price: 99,
    img: "images/rs__img2.svg",
    amount: 0,
    get totalSum() {
      return this.price * this.amount;
    },
  },
  hameleon: {
    name: "Hameleon",
    price: 150,
    img: "images/rs__img3.svg",
    amount: 0,
    get totalSum() {
      return this.price * this.amount;
    },
  },
  white: {
    name: "White",
    price: 85,
    img: "images/rs__img4.svg",
    amount: 0,
    get totalSum() {
      return this.price * this.amount;
    },
  },
};

let burgerBtns = document.querySelectorAll(".list__btn"),
  cartBtn = document.querySelector(".shop"),
  cartlist = document.querySelector(".nav__basket"),
  cartClose = document.querySelector(".nav__close"),
  cartAmount = document.querySelector(".nav__item__count"),
  cartTotalPrice = document.querySelector(".nav__basket__price"),
  cartListItem = document.querySelector(".nav__checklist");

burgerBtns.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    addAmount(this);
  });
});

function addAmount(btn) {
  let parent = btn.closest(".rs__card");
  let id = parent.getAttribute("id");
  menu[id].amount++;
  basket();
}

function basket() {
  let carts = [];

  for (let key in menu) {
    let burger = menu[key];
    let productBurger = document.querySelector(`#${key}`);
    let productCount = productBurger.querySelector(".list__count");

    if (burger.amount > 0) {
      carts.push(burger);
      productCount.classList.add("active");
      productCount.innerHTML = burger.amount;
    }
  }

  let allCount = totalAmount();

  // console.log(allCount);

  if (allCount > 0) {
    cartAmount.classList.add("active");
    cartAmount.innerHTML = allCount;
  }

  cartListItem.innerHTML = "";
  carts.forEach((item) => {
    // console.log(item);
    cartListItem.innerHTML += createBuger(item);
  });

  cartTotalPrice.innerHTML = allSum() + "$";
}

function createBuger(burger) {
  return `<div class="nav__c__item">
    <div class="nav__c__item__left">
        <img src="${burger.img}" alt="" class="nav__c__img">
        <div class="nav__c__item-info">
            <p>${burger.name}</p>
            <p>${burger.totalSum}$</p>
        </div>
    </div>
    <div class="nav__c__item__right">
        <button class="nav__c__item__btn" data-symbol="-">-</button>
        <span class="nav__c__item__count">${burger.amount}</span>
        <button class="nav__c__item__btn" data-symbol="+">+</button>
    </div>
</div>`;
}


window.addEventListener("click", (event) => {
  if (event.target.classList.contains('nav__c__item__btn')) {
      let dataValue = event.target.getAttribute('data-symbol')
      let parentBurger = event.target.closest('.nav__c__item')
      if (parentBurger) {
          let id = parentBurger.getAttribute('id').split("-")[0]
          if (dataValue == '-') {
              menu[id].amount--
          } else if (dataValue == '+') {
              menu[id].amount++
          }
          basket()
      }
  }
})


function allSum() {
  let allsum = 0;

  for (let i in menu) {
    allsum += menu[i].totalSum;
  }

  return allsum;
}

function totalAmount() {
  let total = 0;
  for (let key in menu) {
    total += menu[key].amount;
  }
  return total;
}

cartBtn.addEventListener("click", () => {
  cartlist.classList.add("active");
  heartBasket.classList.remove("active");
});

cartClose.addEventListener("click", () => {
  cartlist.classList.remove("active");
});
// ///////////////////////////////////////////////////////////////////

// let Btns = document.querySelectorAll(".btn"),
//   Btn = document.querySelector(".shop"),
//   list = document.querySelector(".nav__basket"),
//   Close = document.querySelector(".nav__close"),
//   Amount = document.querySelector(".nav__item__count"),   
//   TotalPrice = document.querySelector(".nav__basket__price"),
//   ListItem = document.querySelector(".nav__checklist");

// Btns.forEach((btn, i) => {
//   btn.addEventListener("click", function () {
//     addAmount(this);
//   });
// });

// function basket() {
//   let carts = [];

//   for (let key in menu) {
//     let burger = menu[key];
//     let productBurger = document.querySelector(`#${key}`);
//     let productCount = productBurger.querySelector(".list__count");

//     if (burger.amount > 0) {
//       carts.push(burger);
//       productCount.classList.add("active");
//       productCount.innerHTML = burger.amount;
//     }
//   }

//   let allCount = totalAmount();

//   // console.log(allCount);

//   if (allCount > 0) {
//     cartAmount.classList.add("active");
//     cartAmount.innerHTML = allCount;
//   }

//   cartListItem.innerHTML = "";
//   carts.forEach((item) => {
//     // console.log(item);
//     cartListItem.innerHTML += createBuger(item);
//   });

//   cartTotalPrice.innerHTML = allSum() + "$";
// }

// function createBuger(burger) {
//   return `<div class="nav__c__item">
//     <div class="nav__c__item__left">
//         <img src="${burger.img}" alt="" class="nav__c__img">
//         <div class="nav__c__item-info">
//             <p>${burger.name}</p>
//             <p>${burger.totalSum}$</p>
//         </div>
//     </div>
//     <div class="nav__c__item__right">
//         <button class="nav__c__item__btn nav__c__item__btn__min">-</button>
//         <span class="nav__c__item__count">${burger.amount}</span>
//         <button class="nav__c__item__btn nav__c__item__btn__pus">+</button>
//     </div>
// </div>`;
// }

// /////////////////////////////////////////////////////////////////////

// let heartBtn = document.querySelector(".nav__heart__ic"),
//   heartBasket = document.querySelector(".nav__heart"),
//   heartClose = document.querySelector(".nav__close2"),
//   heartBtns = document.querySelectorAll(".heart__icon"),
//   navHeartCount = document.querySelector(".nav__heart__count"),
//   cardHeart = document.querySelectorAll(".rs__card"),
//   heartCount = document.querySelectorAll(".heart__count");

// heartBtn.addEventListener("click", () => {
//   heartBasket.classList.add("active");
//   cartlist.classList.remove("active");
// });
// heartClose.addEventListener("click", () => {
//   heartBasket.classList.remove("active");
// });

// ////////////////////////////////////////////////////////////

// ///////////////////////////////////////////////////////////

// let plusBtn = document.querySelector(".nav__c__item__btn__pus"),
//   minusBtn = document.querySelector(".nav__c__item__btn__min"),
//   itemCount = document.querySelector(".nav__c__item__count");
  
  
// plusBtn.addEventListener('click', function () {
//   itemCount.innerHTML = itemCount++
// })

// console.log(1);
  
  
  
  
  
  
  
  

// //////////////////////////////////////////////////////////////
