
let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({product, price});
    total += price;
    updateCart();
}

function updateCart() {
    const list = document.getElementById('cart-items');
    list.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - ${item.price} FCFA`;
        list.appendChild(li);
    });
    document.getElementById('total').textContent = total;
    document.getElementById('cart-count').textContent = cart.length;

    const message = encodeURIComponent(
        `Bonjour, je souhaite commander :\n` +
        cart.map(item => `- ${item.product} : ${item.price} FCFA`).join('\n') +
        `\nTotal : ${total} FCFA`
    );
    const phone = "2250556109225";
    const whatsappLink = `https://wa.me/${phone}?text=${message}`;
    document.getElementById('whatsapp-link').href = whatsappLink;
}
