window.onload = getMenu();

const menuSection = document.getElementById("menu");

async function getMenu(){
    try{
    const menu = await fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json");
    const menuItems = await menu.json();
    menuItems.forEach(item => {
        const itemHTML = 
        `<div class="item" id="${item.id}">
        <div class="img">
            <img src="${item.imgSrc}">
        </div>
        <div class="price">
        <div class="name-price">
            <div class="name">${item.name}</div>
            <div class="price">${item.price}-</div>
        </div>
        <div class="add">
            <i class="fa-solid fa-square-plus"></i>
        </div>
    </div>
    </div>`;
    menuSection.insertAdjacentHTML("beforeend", itemHTML);
    });
}
catch(error){
    console.log('Error:', error);
}
}

function takeOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const burgers = ['Cheeseburger', 'Chicken Burger', 'Hamburger']; 
        const randomBurgers = [];
        for (let i = 0; i < 3; i++) {
          const randomIndex = Math.floor(Math.random() * burgers.length);
          randomBurgers.push(burgers[randomIndex]);
        }
        const order = { burgers: randomBurgers };
        resolve(order);
      }, 2500);
    });
  }

  function orderPrep(){
    return new Promise(resolve => {
        setTimeout(() => {
            const orderStatus = true;
            const paid = false;
            resolve({order_status:orderStatus, paid:paid});
        }, 1500);
    })
  }

  function payOrder(){
    return new Promise(resolve => {
        setTimeout(() => {
            const orderStatus = true;
            const paid = true;
            resolve({order_status:orderStatus, paid:paid});
        }, 1000);
    })
  }

  function thankyouFnc(){
    alert("Thankyou for eating with us today!");
  }

  async function workflow() {
    await getMenu();
    const order = await takeOrder();
    console.log('Order:', order);
    const orderStatus = await orderPrep();
    console.log('Order Status:', orderStatus);
    const paymentStatus = await payOrder();
    console.log('Payment Status:', paymentStatus);
    thankyouFnc();
  }
  
  workflow();