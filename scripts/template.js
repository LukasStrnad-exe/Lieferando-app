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
}

function renderprice(pizza) {
    let amountPrice = pizza.price * pizza.amount;
    return`
        <p>${amountPrice.toFixed(2)}€</p>
    `
}