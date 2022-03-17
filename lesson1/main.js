const products = [
    {id: 1, title: 'Laptop', price: 2000, image: './img/laptop.png'},
    {id: 2, title: 'Mouse', price: 20, image: './img/mouse.png'},
    {id: 3, title: 'Keyboard', price: 200, image: './img/keyboard.png'},
    {id: 4, title: 'Gamepad', price: 50, image: './img/gamepad.png'},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => {
    return `<div class="product__item">
                <img class="product__item-img" src="${item.image}" alt="${item.title}">
                <div class="product__item-info">
                <h3 class="product__item-title">${item.title}</h3>
                <p class="product__item-price">${item.price} у.е.</p>
                <button class="product__item-btn">Купить</button>
                </div>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    //Элементы массива по умолчанию разделяются запятой. Чтобы изменить разделяющий символ, можно использовать метод join
    document.querySelector('.products').innerHTML = productsList.join(' ');
};

renderPage(products);