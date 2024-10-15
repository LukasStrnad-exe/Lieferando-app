function addAmount(i){
    let pizza = food[i]
    pizza.amount ++;
    renderSidebar();
}

function subtactAmount(i){
    let pizza = food[i]
    pizza.amount --;
    renderSidebar();
}

function deleteAmount(i){
    let pizza = food[i]
    pizza.amount = 0;
    renderSidebar();
}

function calculateCosts() {
    let subtotal = 0;
    deliveryCost = 0;
    for (let i = 0; i < food.length; i++) {
        let pizza = food[i];
        subtotal += pizza.amount*pizza.price;
    }
    if (subtotal < 20) {
        deliveryCost = 5;
    } else {
        deliveryCost = 0;
    }
    let totalCost = subtotal+deliveryCost;
    renderPaymentStatemant(subtotal,deliveryCost,totalCost)
}

function dNone(add, remove) { 
    document.getElementById(remove).classList.add('d-none');
    document.getElementById(add).classList.remove('d-none');
  }

function dFlex(add){
    document.getElementById(add).classList.add('d-flex');
}