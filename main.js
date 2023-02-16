const divProduct = document.querySelector('#app');


const products = ()=>{
    const Prod = fetch('https://fakestoreapi.com/products/')
    .then((response) => response.json())
    .then((data) => {
    for (const prod of data) {
            divProduct.innerHTML += `
            <div class="product">
                <div class="product-img">
                    <img src="${prod.image}" alt="${prod.title}">
                </div>
                <div class="product-info">
                    <h3>${prod.title}</h3>
                    <p>${prod.description}</p>
                    <i><p>$${prod.price}</p></i>               
                </div>
            </div>
            `
        } 
    })
    .catch((error) => {
        console.log(error);
    })
}
 products();
    
    
    



            









