var productService = new ProductService();

function getEle(id) {
  return document.getElementById(id);
}

function getListProduct() {
  productService
    .getListProductApi()
    .then(function (result) {
      renderHTML(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
getListProduct();

function renderHTML(data) {
  var content = "";
  data.forEach(function (product) {
    content += `
    <div class="card">
        <div class="top-bar">
            <i class="fa-brands fa-apple"></i>
            <em class="stocks" >In Stock</em>
        </div>
        <div class="img-container">
            <img class="product-img" src="${product.img}" alt="">
            <div class="out-of-stock-cover"><span>Out Of Stock</span></div>
        </div>
        <div class="details">
            <div class="name-fav">
                <strong class="product-name">${product.name}</strong>
                <button onclick="this.classList.toggle(&quot;fav&quot;)" class="heart"><i class="fas fa-heart"></i></button>
            </div>
            <div class="wrapper">
                <span>${product.screen}</span><br/>
                <span>${product.backCamera}</span><br/>
                <span>${product.frontCamera}</span><br/>
                <span>${product.desc}</span>
            </div>
            <div class="purchase">
                <p class="product-price">${product.price}$</p>
                <span class="btn-add">
                    <div>
                        <button onclick="addItem(this)" class="add-btn">Add <i class="fa-solid fa-chevron-right"></i></i></button>
                    </div>
                </span>
            </div>
        </div>
    </div>
        `;
  });
  getEle("renderitem").innerHTML = content;
}

// filter

//
function renderCart(data) {
  var list = "";
  data.forEach((product, index) => {
    list += `
        <div class="cart-item">
            <div class="cart-img">
                <img src="${product.img}" style="width:50px" alt="">
            </div>
            <strong class="name">${product.name}</strong>
            <span class="qty-change">
                <div>
                    <button class="btn-qty" onclick="qtyChange(this,'sub')"><i class="fas fa-chevron-left"></i></button>
                        <p class="qty">3</p>
                    <button class="btn-qty" onclick="qtyChange(this,'add')"><i class="fas fa-chevron-right"></i></button>
                </div>
            </span>
            <p class="price">${product.price}</p>
            <button onclick="removeItem(this)"><i class="fas fa-trash"></i></button>
        </div>
        `;
  });
  getEle("cart-items").innerHTML = content;
}

//add

document.getElementsByClassName("add-btn").onclick = function(){
    var cart = []
        
}


