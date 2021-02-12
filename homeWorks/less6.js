const cart = {
    catalogProducts: [],
    productsIn: [],
    totalPrice: 0,
    numberOfProducts: 0,

    init(catalogProducts){
        this.catalogProducts = catalogProducts
        this.addEventHandler()
        this.countNumberOfProducts()
        this.countCartPrice()
        this.render()
    },
    findProductInCatalog(id_product) {
        return this.catalogProducts.find(product => product.id === id_product)
    },
    addToCart(id = 0){
        const product = this.findProductInCatalog(id)
        console.log(product)

        if (product) {
            const findInBasket = this.productsIn.find(({id}) => product.id === id);
            if (findInBasket) {
                findInBasket.number++;
            } else {
                this.productsIn.push({...product, number: 1});
            }
            this.countNumberOfProducts()
            this.countCartPrice()
            this.render()
        } else {
            alert('Ошибка добавления!');
        }
    },

    getTotalPrice(){
        return this.totalPrice
    },

    getNumberOfProducts(){
        return this.numberOfProducts
    },

    countNumberOfProducts(){
        this.numberOfProducts = 0
        this.productsIn.forEach((product) => {
            this.numberOfProducts += product.number
        })
    },

    countCartPrice() {
        this.totalPrice = 0
        this.productsIn.forEach((product) => {
            this.totalPrice += product.price * product.number
        })
    },

    render(){
        const cart_block = document.querySelector('.cart')
        cart_block.innerHTML =
            `Total Price: ${this.getTotalPrice()}<br>Number of Products: ${this.getNumberOfProducts()}`
        this.renderFullCart()
    },

    renderItem(product){
        return `<div class="product-item-cart">
                            <div class="product-list">
                                <h3>${product.name}</h3>
                                  <span class="price">$${product.price * product.number}</span>
                                  <button class="button remove-from-cart-button" data-id_product="${product.id}">Remove</button>
                            </div>
                         </div>`
    },

    renderFullCart(){
        const cartFullBlock = document.querySelector('.full-cart')
        cartFullBlock.innerHTML = ''
        this.productsIn.forEach(product => {
            cartFullBlock.innerHTML = cartFullBlock.innerHTML + this.renderItem(product)
        })
    },

    addEventHandler(){
        const cartFullBlock = document.querySelector('.full-cart')
        cartFullBlock.addEventListener('click', event => this.removeFromCart(event))
    },
    findProductInCart(id_product) {
        return this.productsIn.find(product => product.id === id_product)
    },

    removeFromCart(event){
        if (!event.target.classList.contains('remove-from-cart-button')) {return}
        const idOfProduct = +event.target.dataset.id_product

        const product = this.findProductInCart(idOfProduct);
        if (product) {
            const findInBasket = this.productsIn.find((prod) => product.id === prod.id);
            if (findInBasket.number > 1) {
                findInBasket.number -= 1;
            } else {
                delete this.productsIn[this.productsIn.indexOf(product)]

            }
            this.countNumberOfProducts()
            this.countCartPrice()
            this.render()
        } else {
            alert('delete error!');
        }
    }



}



const catalog = {
    cart: null,
    catalogBlock: document.querySelector('#catalog'),
    products: [
        {id:1, name: 'Bitcoin', price: 47000, description: 'Some description here', img: 'https://img5.goodfon.ru/original/640x960/5/ca/bitcoin-btc-bitkoin-logo-fon-belyi-fon-logo.jpg'},
        {id:2, name: 'Ethereum', price: 1800, description: 'Some description here', img: 'https://yt3.ggpht.com/a/AATXAJwqEzQkXIU73DKDJIxT4s_AwEobecbrilUGzqC3_g=s900-c-k-c0xffffffff-no-rj-mo'},
        {id:3, name: 'BNB', price: 130, description: 'Some description here', img: 'https://avatars.mds.yandex.net/get-zen_doc/1671806/pub_5e95e343539dae4595bdad7e_5e95e458539dae4595bdadb1/scale_1200'},
        {id:4, name: 'SFP', price: 4, description: 'Some description here', img: 'https://pc-miner.com/wp-content/uploads/2021/01/unnamed.jpg'},
    ],

    renderCatalog(products){
        let outPutString = ``

        products.forEach((product) => {
            outPutString += `<div class="product-item">
                            <img class="prod_img" src="${product.img}">
                            <div class="product-list">
                                <h3>${product.name}</h3>
                                  <span class="price">$${product.price}</span>
                                  <button class="button add-to-cart-button" data-id_product="${product.id}">Add to cart</button>
                            </div>
                         </div>`
        })
        return `${outPutString}`
    },

    showProduct(){
        document.querySelector('#catalog').innerHTML = this.renderCatalog(this.products)
    },

    addEventHandler(){
        this.catalogBlock.addEventListener('click', event => this.addToCart(event))
    },

    addToCart(event){
        if (!event.target.classList.contains('add-to-cart-button')) {return}
        const id_product = +event.target.dataset.id_product
        this.cart.addToCart(id_product);
    },

    init(cart){
        this.cart = cart
        this.showProduct()
        this.addEventHandler()
    }
}

catalog.init(cart)
cart.init(catalog.products)

const clearButt = document.querySelector('.clear-cart-button')
clearButt.addEventListener('click', ()=> {
    cart.productsIn = []
    cart.totalPrice = 0
    cart.numberOfProducts = 0
    cart.render()
})

const cartButt = document.querySelector('.cart-button')
cartButt.addEventListener('click', () => {
    document.querySelector('.full-cart').classList.toggle('invisible')
})
