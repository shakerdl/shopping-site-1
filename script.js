const productContainer = document.getElementById("products-container");
const headerContainer = document.getElementById('header');

const productsArray = [];
const headerData = {
    title: 'My Shopping Site'
};

productsArray.push({
    name: 'Black Tea',
    amount: 99,
    price: 20
});

productsArray.push({
    name: 'Coffee',
    amount: 2,
    price: 21
});

productsArray.push({
    name: 'Milk',
    amount: 100,
    price: 3
});


productsArray.push({
    name: 'Green Tea',
    amount: 29713,
    price: 1
});

const productsHTML = createProductList(productsArray);
productContainer.appendChild(productsHTML);

const headerHTML = createHeader(headerData);
headerContainer.appendChild(headerHTML);





// for(let i=0; i<productsArray.length;i++) {

//     const productDIV = document.createElement("div");
//     productDIV.classList.add("product");

//     const productNameDIV = document.createElement("div");
//     productNameDIV.innerHTML = productsArray[i].name;
//     productDIV.appendChild(productNameDIV);

//     const productAmountDIV = document.createElement("div");
//     productAmountDIV.innerHTML = "Amount: " + productsArray[i].amount;
//     productDIV.appendChild(productAmountDIV);

//     productContainer.appendChild(productDIV);

// }
