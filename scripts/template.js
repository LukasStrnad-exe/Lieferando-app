function renderFoodSelection(){

    let foodcontainer = document.getElementById('foodContainer');
    foodcontainer.innerHTML = '';

    for (let i = 0; i < food.length; i++) {
        let pizza = food[i]
        foodcontainer.innerHTML += `
        <div class="bg_container" onclick="addAmount(${i})">
            <div class="food_name">
                <h4>${pizza['name']}</h4>
            </div>
            <div class="food_description">
                <p>${pizza['description']}</p>
            </div>
            <div class="food_price">
                <p>${pizza['price'].toFixed(2)}€</p>
            </div>
        </div>
    `;
    }
}

function renderBasket(){

    let basketcontainer = document.getElementById('basketProducts');
    basketcontainer.innerHTML = '';

    for (let i = 0; i < food.length; i++) {
        let pizza = food[i]
        if (pizza['amount'] == 0) {
            basketcontainer.innerHTML += ``;
        } else {
            basketcontainer.innerHTML += `
            <div class="basket_product">
                <h4>${pizza['name']}</h4>
                <div class="basket_information_per_pizza">
                    <img src="assets/icons/minus.png" alt="minus" onclick="subtactAmount(${i})">
                    <p>${pizza['amount']}x</p>
                    <img src="assets/icons/plus.png" alt="plus" onclick="addAmount(${i})">
                    ${renderprice(pizza)}
                    <img src="assets/icons/mulleimer.png" alt="delete" onclick="deleteAmount(${i})">
                </div>
            </div>
        `;  
        }
    }
    renderPaymentStatemant()
}

function renderprice(pizza) {
    let amountPrice = pizza.price * pizza.amount;
    return`
        <p>${amountPrice.toFixed(2)}€</p>
    `
}

function renderPaymentStatemant(){
    let subtotal = 0;
    deliveryCost = 0;
    let paymentcontainer = document.getElementById('paymentStatemant');
    for (let i = 0; i < food.length; i++) {
        let pizza = food[i];
        subtotal += pizza.amount*pizza.price;
    }
    if (subtotal < 20) {
        deliveryCost = 5;
    } else {
        deliveryCost = 0;
    }
    paymentcontainer.innerHTML = '';
        paymentcontainer.innerHTML += `
            <div class="subtotal">
                <h5>Zwischensumme</h5>
                <h5>${subtotal.toFixed(2)}€</h5>
            </div>
            <div class="delivery_cost">
                <h5>Lieferkosten</h5>
                <h5>${deliveryCost.toFixed(2)}€</h5>
            </div>
            <div class="amount">
                <h5>Gesamt</h5>
                <h5>148,30€</h5>
            </div>
    `;
}