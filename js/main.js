function prCarousel() {
  let leftBtn = document.querySelector(".arrow1"),
    rightBtn = document.querySelector(".arrow2");
  leftCard = document.querySelector(".pr__card1");
  rightCard = document.querySelector(".pr__card2");

  leftBtn.addEventListener("click", () => {
    leftCard.classList.add("active");
    rightCard.classList.remove("active");
  });

  rightBtn.addEventListener("click", () => {
    leftCard.classList.remove("active");
    rightCard.classList.add("active");
  });

  leftCard.addEventListener("click", () => {
    leftCard.classList.remove("active");
  });

  rightCard.addEventListener("click", () => {
    rightCard.classList.remove("active");
  });
}
prCarousel();


function rsCarousel() {
    
    let leftBtn = document.querySelector('.angle__icon'),
        rightBtn = document.querySelector('.angle__icon2'),
        card = document.querySelector('.rs__card')
    
    rightBtn.addEventListener('click', () => {
        card.classList.add('active')
    })
    
}
rsCarousel()

// let menu = {
//     blue: {
//         name: 'Blue',
//         price: $110,
//         img: "images/rs_img1.svg",
//         amount: 0,
//         get totalSum(){
//             return this.price * this.amount;
//         }
//     },
//     black: {
//         name: 'Black',
//         price: $990,
//         img: "images/rs_img2.svg",
//         amount: 0,
//         get totalSum(){
//             return this.price * this.amount;
//         }
//     },
//     hameleon: {
//         name: 'Hameleon',
//         price: $150,
//         img: "images/rs_img3.svg",
//         amount: 0,
//         get totalSum(){
//             return this.price * this.amount;
//         }
//     },
//     white: {
//         name: 'White',
//         price: $85,
//         img: "images/rs_img4.svg",
//         amount: 0,
//         get totalSum(){
//             return this.price * this.amount;
//         }
//     }
// }

// let burgerBtns = document.querySelectorAll('.rs__card__ic'),
//     cartBtn = document.querySelector('.shop__i'),
//     cartlist = document.querySelector('.nav__basket'),
//     cartClose = document.querySelector('.nav__close'),
//     cartAmount = document.querySelector('.nav__item__count'),
//     cartTotalPrice = document.querySelector('.nav__basket__price'),
//     cartListItem = document.querySelector('.nav__checklist')

// burgerBtns.forEach((btn, i) => {
//     btn.addEventListener('click', function() {
//         addAmount(this)
//     })
// })

// function addAmount(btn) {
//     let parent = btn.closest('.rs__card')
//     let id = parent.getAttribute("id");
//     menu[id].amount++
//     basket()
// }

// function basket() {
//     let carts = [];
    
//     for(let key in menu){
//         let burger = menu[key];
//         let productBurger = document.querySelector(`#${key}`)
//         let productCount = productBurger.querySelector('.list__count')
        
//         if(burger.amount > 0){
//             carts.push(burger)
//             productCount.classList.add('active')
//             productCount.innerHTML = burger.amount
//         }
//     }
// }






