pageName = "showDetails.html";
let showDetailsBody = document.getElementById("showProductDetails");
let productID = localStorage.getItem("productID");
let product = products.find((product) => product.id == productID);
showDetailsBody.innerHTML = ` 
    <div class="product-container">
        <img src="${product.image}" alt="EliteBook 745 Hp" class="product-image">
        <div class="product-info">
            <h1 class="product-name">${product.name}</h1>
            <p class="product-category"><strong>Category: </strong>${product.category}</p>
            <p class="product-price"><strong>Price: </strong>${product.price}</p>
            <p class="product-details"><strong>Description: </strong>${product.description}</p>
            <p class="product-quantity"><strong>Quantity: </strong>${product.stockQuantity}</p>
            <p class="add-to-cart"><button onclick="addToCart(${product.id})"><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button></p>

        </div>
    </div>`;
function addToCart(id) {
    cartProducts.innerHTML = "";
    if (localStorage.getItem("login-data")) {
        let itemIndex = cart.findIndex((e) => e.productId == id);
        if (cart.length == 0) {
            cart = [
                {
                    productId: id,
                    customerID: customerID,
                    quantity: 1,
                },
            ];
            drawList();
        } else if (itemIndex < 0) {
            cart.push({
                productId: id,
                customerID: customerID,
                quantity: 1,
            });
            drawList();
        } else {
            cart[itemIndex].quantity += 1;
            drawList();
        }
        localStorage.setItem("cartItemsAdded", JSON.stringify(cart));
        badge.style.display = "block";
        let totalQuantity = 0;
        cart.forEach((item) => {
            totalQuantity = totalQuantity + item.quantity;
        });
        badge.innerHTML = totalQuantity;
    } else {
        window.location = "login.html";
    }
}
