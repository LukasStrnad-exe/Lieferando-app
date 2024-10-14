function foodselection(){

    let foodcontainer = document.getElementById('foodContainer');
    foodcontainer.innerHTML = '';

    for (let i = 0; i < food.length; i++) {
        let pizza = food[i]
        foodcontainer.innerHTML += `
        <div class="bg_container">
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