function renderSidebar(){
    renderbasketNothing();
    renderBasket();
    calculateCosts();
    renderdNone();
}

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
    calculateCosts()
}

function renderprice(pizza) {
    let amountPrice = pizza.price * pizza.amount;
    return`
        <p>${amountPrice.toFixed(2)}€</p>
    `
}

function renderPaymentStatemant(subtotal,deliveryCost,totalCost){
    let paymentcontainer = document.getElementById('paymentStatemant');
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
                <h5>${totalCost.toFixed(2)}€</h5>
            </div>
    `;
}

function renderbasketNothing() {    
    let basketnothingcontainer = document.getElementById('basketNothing');
    basketnothingcontainer.innerHTML = '';
    basketnothingcontainer.innerHTML += `
        <img src="assets/icons/warenkorb.png" alt="">
        <p>Wähle leckere Gerichte aus der Karte und Bestelle dein Menü</p>
    `;
}

function renderdNone(){
    let totalamount = 0;
    for (let i = 0; i < food.length; i++) {
        let pizza = food[i];
        totalamount += pizza.amount
    }
    if (totalamount == 0) {
        dNone('basketNothing','paymentStatemant')
        dNone('basketNothing','basketProducts')

    } else {
        dNone('paymentStatemant','basketNothing')
        dNone('basketProducts','basketNothing')
    }
}