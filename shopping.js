const loadCartFromLocalStorage = () => {
    const cart = getCard();
    for (const name in cart) {
        displayProductName(name);
    }
}

const addItem = () => {
    const nameField = document.getElementById('product-name');
    const productName = nameField.value;

    if (!productName) {
        return productName;
    }

    // display items in ui
    displayProductName(productName);

    // add products in local storage
    addProductToCart(productName);

    // clear input data
    nameField.value = '';
}

const displayProductName = (productName) => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = productName;
    ul.appendChild(li);
}


const getCard = () => {
    const cart = localStorage.getItem('cart');
    let cartObject;
    if (cart) {
        cartObject = JSON.parse(cart);
    } else {
        // cartObject = JSON.stringify(cart);
        cartObject = {};
    }
    return cartObject;
}

const addProductToCart = (productName) => {
    const cart = getCard();
    if (cart[productName]) {
        cart[productName] = cart[productName] + 1;
    } else {
        cart[productName] = 1;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}

loadCartFromLocalStorage();