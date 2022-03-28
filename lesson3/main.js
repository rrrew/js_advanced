const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     // window.ActiveXObject -> xhr = new ActiveXObject()
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status !== 200){
//                 console.log('Error');
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     };
//     xhr.send();
// };

class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = data;
//                 console.log(data);
                this.render()
            });
    }
    // _fetchProducts(cb){
    //     getRequest(`${API}/catalogData.json`, (data) => {
    //         this.goods = JSON.parse(data);
    //         console.log(this.goods);
    //         cb();
    //     })
    // }
    _getProducts(){
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
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
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.id = product.id_product;
        this.image = img;
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

let list = new ProductsList();

class Basket {
    constructor(container = '.basket') {
        this.container = container;
        this.products = [];
        this._basketToggle();
        this._getBasketItem()
            .then(data => {
                this.products = data.contents;
                this.render();
            })
    }

    _getBasketItem() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error)
            })
    }
    

    render() {
        let block = document.querySelector(this.container);
        for (let item of this.products) {
            let product = new BasketEl();
            block.insertAdjacentHTML ('beforeend', product.render(item))
        }
    }


    _basketToggle() {
        document.querySelector('.btn-cart').addEventListener('click', () =>
            document.querySelector(this.container).classList.toggle('visually-hidden')
        )}

}

class BasketEl {
    render (product, img = 'https://via.placeholder.com/200x150') {
        return `<div class="basket__item" data-id="${product.id_product}">
        <div class="product__bio">
            <img src="${img}" alt="${product.product_name}">
            <p class="product__title">${product.product_name}</p>
        </div>
        <div class="product__details>
            <p class="product__quantity">Количество: ${product.quantity}</p>
            <p class="product__price">${product.price}</p>
            <p class="product__price-total">${product.quantity * product.price}</p>
            <button class="btn__delete" data-id="${product.id_product}">x</button>
        </div>
    </div>`
    }
}

let basket = new Basket();