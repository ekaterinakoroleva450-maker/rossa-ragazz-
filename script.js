// ===== СПИСОК ТОВАРОВ (20 штук) =====
const products = [
    { id: 1, name: "Платье «Нежность»", category: "Платья", size: "S", color: "Бежевый", price: 4590, img: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=300&h=400&fit=crop" },
    { id: 2, name: "Платье «Закат»", category: "Платья", size: "M", color: "Розовый", price: 5290, img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop" },
    { id: 3, name: "Блуза шёлковая", category: "Блузы", size: "XS", color: "Бежевый", price: 3590, img: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=300&h=400&fit=crop" },
    { id: 4, name: "Топ с воланами", category: "Блузы", size: "M", color: "Красный", price: 2490, img: "https://images.unsplash.com/photo-1584277261846-c6a1672a9a3b?w=300&h=400&fit=crop" },
    { id: 5, name: "Юбка миди", category: "Юбки", size: "S", color: "Коричневый", price: 3890, img: "https://images.unsplash.com/photo-1583496661160-f3b88c6d76c7?w=300&h=400&fit=crop" },
    { id: 6, name: "Юбка плиссе", category: "Юбки", size: "L", color: "Бежевый", price: 2990, img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop" },
    { id: 7, name: "Кардиган оверсайз", category: "Кардиганы", size: "L", color: "Коричневый", price: 5990, img: "https://images.unsplash.com/photo-1548624396-b4d7fa580978?w=300&h=400&fit=crop" },
    { id: 8, name: "Кардиган уютный", category: "Кардиганы", size: "M", color: "Розовый", price: 6490, img: "https://images.unsplash.com/photo-1548624396-b4d7fa580978?w=300&h=400&fit=crop" },
    { id: 9, name: "Платье макси", category: "Платья", size: "L", color: "Красный", price: 6990, img: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=300&h=400&fit=crop" },
    { id: 10, name: "Блуза с бантом", category: "Блузы", size: "XS", color: "Розовый", price: 3790, img: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=300&h=400&fit=crop" },
    { id: 11, name: "Юбка кожаная", category: "Юбки", size: "S", color: "Коричневый", price: 4590, img: "https://images.unsplash.com/photo-1583496661160-f3b88c6d76c7?w=300&h=400&fit=crop" },
    { id: 12, name: "Кардиган длинный", category: "Кардиганы", size: "M", color: "Бежевый", price: 5390, img: "https://images.unsplash.com/photo-1548624396-b4d7fa580978?w=300&h=400&fit=crop" },
    { id: 13, name: "Платье свитер", category: "Платья", size: "L", color: "Бежевый", price: 4890, img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop" },
    { id: 14, name: "Топ цветочный", category: "Блузы", size: "M", color: "Розовый", price: 2190, img: "https://images.unsplash.com/photo-1584277261846-c6a1672a9a3b?w=300&h=400&fit=crop" },
    { id: 15, name: "Юбка гофре", category: "Юбки", size: "XS", color: "Красный", price: 3290, img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop" },
    { id: 16, name: "Кардиган с поясом", category: "Кардиганы", size: "L", color: "Коричневый", price: 6290, img: "https://images.unsplash.com/photo-1548624396-b4d7fa580978?w=300&h=400&fit=crop" },
    { id: 17, name: "Платье «Вишня»", category: "Платья", size: "S", color: "Красный", price: 5790, img: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=300&h=400&fit=crop" },
    { id: 18, name: "Блуза льняная", category: "Блузы", size: "L", color: "Бежевый", price: 3990, img: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=300&h=400&fit=crop" },
    { id: 19, name: "Юбка с запахом", category: "Юбки", size: "M", color: "Розовый", price: 3490, img: "https://images.unsplash.com/photo-1583496661160-f3b88c6d76c7?w=300&h=400&fit=crop" },
    { id: 20, name: "Платье «Амалия»", category: "Платья", size: "M", color: "Бежевый", price: 7890, img: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=300&h=400&fit=crop" }
];

// ===== КОРЗИНА И ИЗБРАННОЕ =====
let cart = {};
let favorites = [];

// ===== ПОКАЗАТЬ ТОВАРЫ С УЧЁТОМ ФИЛЬТРОВ =====
function showProducts() {
    let category = document.getElementById("filterCat").value;
    let size = document.getElementById("filterSize").value;
    let maxPrice = document.getElementById("filterPrice").value;
    
    let filtered = [];
    for (let i = 0; i < products.length; i++) {
        let p = products[i];
        if (category !== "all" && p.category !== category) continue;
        if (size !== "all" && p.size !== size) continue;
        if (maxPrice !== "" && p.price > Number(maxPrice)) continue;
        filtered.push(p);
    }
    
    let container = document.getElementById("productsContainer");
    container.innerHTML = "";
    
    for (let i = 0; i < filtered.length; i++) {
        let p = filtered[i];
        let inFav = favorites.includes(p.id);
        let cartQty = cart[p.id] || 0;
        
        let card = document.createElement("div");
        card.className = "product";
        card.innerHTML = `
            <img src="${p.img}" alt="${p.name}" loading="lazy">
            <h3>${p.name}</h3>
            <div class="product-category">${p.category} | размер ${p.size} | цвет ${p.color}</div>
            <div class="price">${p.price.toLocaleString()} ₽</div>
            <button class="add-btn" onclick="addToCart(${p.id})">🛒 В корзину ${cartQty > 0 ? "("+cartQty+")" : ""}</button>
            <button class="fav-star" onclick="toggleFavorite(${p.id})">${inFav ? "❤️" : "🤍"}</button>
        `;
        container.appendChild(card);
    }
    
    updateCounters();
}

// ===== ДОБАВЛЕНИЕ В КОРЗИНУ =====
function addToCart(productId) {
    if (cart[productId]) {
        cart[productId]++;
    } else {
        cart[productId] = 1;
    }
    showProducts();
}

// ===== УДАЛЕНИЕ ИЗ КОРЗИНЫ =====
function removeFromCart(productId) {
    delete cart[productId];
    showProducts();
    openCart();
}

// ===== ИЗМЕНЕНИЕ КОЛИЧЕСТВА ТОВАРА В КОРЗИНЕ =====
function changeQuantity(productId, delta) {
    let current = cart[productId] || 0;
    let newQty = current + delta;
    if (newQty <= 0) {
        delete cart[productId];
    } else {
        cart[productId] = newQty;
    }
    showProducts();
    openCart();
}

// ===== ДОБАВИТЬ/УДАЛИТЬ ИЗ ИЗБРАННОГО =====
function toggleFavorite(productId) {
    let index = favorites.indexOf(productId);
    if (index === -1) {
        favorites.push(productId);
    } else {
        favorites.splice(index, 1);
    }
    showProducts();
}

// ===== ОБНОВИТЬ СЧЁТЧИКИ В ШАПКЕ =====
function updateCounters() {
    let totalItems = 0;
    for (let id in cart) {
        totalItems += cart[id];
    }
    document.getElementById("cartCount").innerText = totalItems;
    document.getElementById("favCount").innerText = favorites.length;
}

// ===== ПРИМЕНИТЬ ФИЛЬТРЫ =====
function filterProducts() {
    showProducts();
}

// ===== СБРОСИТЬ ФИЛЬТРЫ =====
function resetFilters() {
    document.getElementById("filterCat").value = "all";
    document.getElementById("filterSize").value = "all";
    document.getElementById("filterPrice").value = "";
    showProducts();
}

// ===== ОТКРЫТЬ КОРЗИНУ =====
function openCart() {
    let modal = document.getElementById("cartModal");
    let itemsDiv = document.getElementById("cartItems");
    let totalDiv = document.getElementById("cartTotal");
    
    itemsDiv.innerHTML = "";
    let total = 0;
    
    for (let id in cart) {
        let product = products.find(p => p.id == id);
        if (product) {
            let qty = cart[id];
            let itemTotal = product.price * qty;
            total += itemTotal;
            
            let itemDiv = document.createElement("div");
            itemDiv.className = "cart-item";
            itemDiv.innerHTML = `
                <div><b>${product.name}</b><br>${product.price.toLocaleString()} ₽ × ${qty}</div>
                <div>
                    <button onclick="changeQuantity(${id}, -1)">-</button>
                    <span style="margin:0 10px;">${qty}</span>
                    <button onclick="changeQuantity(${id}, 1)">+</button>
                    <button onclick="removeFromCart(${id})" style="margin-left:10px;">🗑️</button>
                </div>
            `;
            itemsDiv.appendChild(itemDiv);
        }
    }
    
    if (Object.keys(cart).length === 0) {
        itemsDiv.innerHTML = "<p style='text-align:center; padding:20px;'>✨ Корзина пуста, но вы уже близки к покупке ✨</p>";
        totalDiv.innerHTML = "";
    } else {
        totalDiv.innerHTML = `Итого: ${total.toLocaleString()} ₽`;
    }
    
    modal.style.display = "flex";
}

// ===== ЗАКРЫТЬ КОРЗИНУ =====
function closeCart() {
    document.getElementById("cartModal").style.display = "none";
}

// ===== ОТКРЫТЬ ИЗБРАННОЕ =====
function openFavorites() {
    let modal = document.getElementById("favModal");
    let itemsDiv = document.getElementById("favItems");
    
    itemsDiv.innerHTML = "";
    
    if (favorites.length === 0) {
        itemsDiv.innerHTML = "<p style='text-align:center; padding:20px;'>🤍 Избранное пусто, добавьте понравившиеся вещи 🤍</p>";
    } else {
        for (let i = 0; i < favorites.length; i++) {
            let product = products.find(p => p.id === favorites[i]);
            if (product) {
                let itemDiv = document.createElement("div");
                itemDiv.className = "cart-item";
                itemDiv.innerHTML = `
                    <div><b>${product.name}</b><br>${product.price.toLocaleString()} ₽</div>
                    <div>
                        <button onclick="addToCart(${product.id}); openFavorites();">➕ В корзину</button>
                        <button onclick="toggleFavorite(${product.id}); openFavorites();" style="margin-left:10px;">❤️ Удалить</button>
                    </div>
                `;
                itemsDiv.appendChild(itemDiv);
            }
        }
    }
    
    modal.style.display = "flex";
}

// ===== ЗАКРЫТЬ ИЗБРАННОЕ =====
function closeFav() {
    document.getElementById("favModal").style.display = "none";
}

// ===== ОФОРМЛЕНИЕ ЗАКАЗА =====
function checkout() {
    let total = 0;
    for (let id in cart) {
        let product = products.find(p => p.id == id);
        if (product) total += product.price * cart[id];
    }
    alert("✨ Заказ оформлен на сумму " + total.toLocaleString() + " ₽ ✨\nСпасибо за покупку! С вами свяжется Rossa Ragazza.");
    cart = {};
    showProducts();
    closeCart();
}

// ===== ЗАПУСК ПРИ ЗАГРУЗКЕ СТРАНИЦЫ =====
showProducts();