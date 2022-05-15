//class product
class Product {
  title = 'DEFAULT';
  imageUrl;
  price;
  description;

  constructor(title, image, pric, decr) {
    this.title = title;
    this.imageUrl = image;
    this.price = pric;
    this.description = decr;
  }
}
//calss shopping cart
class shoppingCart{
    items=[];
    render(){
        const cartEl=document.createElement('section');
        cartEl.innerHTML=`
        <h2>Total:\$${0}<h2>
        <button>Order Now!</button>
        `;
        cartEl.className='cart';
        return cartEl;
    }
}
//class producr Itrem
class ProductItem {
  constructor(product) {
    this.product = product;
  }
  addToCart(){
      console.log('adding to produict to cart');
      console.log(this.product);
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
                <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}>
                <div class="">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>add to card</button>
                </div>
                </div>
                `;
                const addButtonCard=prodEl.querySelector('button'); 
                addButtonCard.addEventListener('click',this.addToCart.bind(this))
    return prodEl;
  }
}
//class product list
class ProductList {
  products = [
    new Product('A pillow', './img/forest-balcony.webp', 20, 'A soft pillow'),

    new Product(
      'a Love story',
      './img/2.jpg',
      2000,
      'best thisnggs in this world'
    ),
    new Product(
      'a Love story',
      './img/1.jpg',
      2000,
      'best thisnggs in this world'
    ),
  ];
  render() {
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
}
}
//class shop
class Shop{
    render(){
    const renderHook = document.getElementById('app');

        const cart= new shoppingCart();
        const cartEl = cart.render();
        const productList = new ProductList();
        const prodListEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(prodListEl);

        
    }
}
const shop = new Shop();
shop.render();