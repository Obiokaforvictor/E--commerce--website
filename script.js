let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    displayCart();
}

function displayCart() {
    let cartList = document.getElementById("cart-list");
    let total = 0;

    cartList.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.name + " - $" + item.price;
        cartList.appendChild(li);

        total += item.price;
    });

    document.getElementById("total").textContent = total;
}
