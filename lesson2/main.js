class productList {
    constructor (container='.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();
        this._getSum();
    }

    _fetchProducts () {
        this.goods = [
            {id: 1, title: 'Laptop', price: 2000, image: './img/laptop.png'},
            {id: 2, title: 'Mouse', price: 20, image: './img/mouse.png'},
            {id: 3, title: 'Keyboard', price: 200, image: './img/keyboard.png'},
            {id: 4, title: 'Gamepad', price: 50, image: './img/gamepad.png'},
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new productItem(product);
            block.insertAdjacentHTML('beforeend', item.render());
        }
    }
    
    _getSum() {
        let sum = 0;
        this.goods.forEach(product => {
            sum += product.price;
        })
        console.log(`Сумма всех товаров: ${sum}`)
    }


}


class productItem {
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.image = product.image;
        this.price = product.price;
    }

    render () {
        return `<div class="product__item">
                <img class="product__item-img" src="${this.image}" alt="${this.title}">
                <div class="product__item-info">
                <h3 class="product__item-title">${this.title}</h3>
                <p class="product__item-price">${this.price} у.е.</p>
                <button class="product__item-btn">Купить</button>
                </div>
            </div>`
    }
}

let list = new productList();

class Basket {
    addProduct() {

    }

    removeProduct() {

    }

    changeQuantity() {

    }

    clear () {

    }

    render() {

    }
}

class BasketEl {
    render () {
        
    }
}