const body = document.querySelector('.body-content')


fetch('https://fakestoreapi.com/products').then(e =>{
    return e.json()
}).then(products => {
    console.log(products)
    for(const product of products){
      body.innerHTML += `  <div class="product-card">
      <img src=${product.image} alt="Product Image" class="product-image"/>
      <h2 class="product-name">${product.title}</h2>
      <p class="product-price">${product.price}$</p>
      <button class="buy-button">Mua ngay</button>
    </div>`
    }
})