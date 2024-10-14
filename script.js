function addAmount(i){
    let pizza = food[i]
    pizza.amount ++;
    renderBasket();
}

function subtactAmount(i){
    let pizza = food[i]
    pizza.amount --;
    renderBasket();
}

function deleteAmount(i){
    let pizza = food[i]
    pizza.amount = 0;
    renderBasket();
}