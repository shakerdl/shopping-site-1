// name: 'Black Tea',
// amount: 99,
// price: 20
//must have product.title


function createProduct(product) {
  let productHTML;
  if (product && typeof product === "object") {
    // H2
    const currTitle = createElement({
      className: "productTitle",
      innerHTML: product.name,
    });
    // AMOUNT ** Parent
    const currAmount = createElement({ className: "productAmount" }); // newElement("div");
    // AMOUNT SPAN
    const currSpanAmount = createElement({ tag: "span", innerHTML: "Amount" });
    // AMOUNT INPUT
    const currInputAmount = createElement({
      tag: "span",
      innerHTML: product.amount,
    });
    currInputAmount.type = "number";
    // ADIING THE TWO ELEMENT TO THE AMOUNT PARENT
    currAmount.appendChild(currSpanAmount);
    currAmount.appendChild(currInputAmount);
    //  PRICE
    const currPrice = createElement({
      tag: "span",
      className: "productPrice",
      innerHTML: product.price,
    });
    // INSERT ALL THE ELEMENT TO DIV PRODUCTS
    productHTML = createElement({
      className: "productInfo",
      children: [currTitle, currAmount, currPrice],
    });
    console.log(true);
  } else {
    throw console.error("no item");
  }

  return productHTML;
}

function createProductList(productList) {
  //TODO: add logic
  //stub
  const productListElement = document.createElement("div");
  if (productList && productList.length) {
    for (let i = 0; i < productList.length; i++) {
      const product = createProduct(productList[i]);
      console.log(product);
      productListElement.appendChild(product);
    }
  }

  return productListElement;
}

function createHeader(headerObject) {
  //TODO: add logic
  const headerElement = createElement({ tag: "header" });
  if (headerObject && typeof headerObject === "object") {
    const h1 = createElement({ tag: "h1", innerHTML: headerObject.title });
    headerElement.appendChild(h1);
  }else {
    throw console.error("no header");
  }

  return headerElement;
}

function createElement({
  id,
  className,
  tag = "div",
  innerHTML,
  children,
  parent,
  img,
  // attr:{value:{}},
} = {}) {
  let element = document.createElement(tag);
  if (className) {
    element.classList.add(className);
  }
  if (id) {
    element.id = id;
  }
  if (innerHTML) {
    element.innerHTML = innerHTML;
  }
  if (children) {
    element.append(...children);
  }
  if (parent) {
    parent.appendChild(element);
  }
  if (img) {
    element.src = img;
    element.setAttribute("alt", "product-image");
  }
  // if (attr) {
  //   element.setAttribute(attr.name, attr.value);
  // }
  return element;
}
