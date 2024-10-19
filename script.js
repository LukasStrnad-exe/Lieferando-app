function addAmount(i){
    let pizza = food[i]
    pizza.amount ++;
    renderSidebar();
    save();
}

function subtactAmount(i){
    let pizza = food[i]
    pizza.amount --;
    renderSidebar();
    save();
}

function deleteAmount(i){
    let pizza = food[i]
    pizza.amount = 0;
    renderSidebar();
    save();
}

function deleteAllAmount(){
    for (let i = 0; i < food.length; i++) {
        let meal = food[i];
        meal.amount = 0;
        renderSidebar();
        save();
    }
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

  function toggleBasket(add, remove) {
    if (basket === false) {
        document.getElementById(add).classList.remove('sidebar_dnone');
        document.getElementById(remove).classList.add('d-none');
        basket = true;
    } else {
        document.getElementById(remove).classList.remove('d-none');
        document.getElementById(add).classList.add('sidebar_dnone');
        basket = false;
    }
}

function save() {
    localStorage.setItem("food", JSON.stringify(food));
  }
  
  function load() {
    let data = localStorage.getItem("food");
    if (data) {
      food = JSON.parse(data);
    } else {
    
    }
}