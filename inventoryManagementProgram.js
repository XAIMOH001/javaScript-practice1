// Inventory Management Program

//Declare an empty inventory array
let inventory = [];

//find product index 
function findProductIndex(productName) {
  productName = productName.toLowerCase();
  return inventory.findIndex(item => item.name === productName);
}

function addProduct(product) {
  product.name = product.name.toLowerCase();
  const index = findProductIndex(product.name);

  if (index !== -1) {
    //update quantity
    inventory[index].quantity += product.quantity;
    console.log(`${product.name} quantity updated`);
  } else {
    // add to inventory
    inventory.push(product);
    console.log(`${product.name} added to inventory`);
  }
}

function removeProduct(productName, quantity) {
  productName = productName.toLowerCase();
  const index = findProductIndex(productName);

  if (index === -1) {
    console.log(`${productName} not found`);
    return;
  }

  const product = inventory[index];

  if (product.quantity < quantity) {
    console.log(`Not enough ${productName} available, remaining pieces: ${product.quantity}`);
  } else {
    product.quantity -= quantity;

    if (product.quantity === 0) {
      // Remove product completely
      inventory.splice(index, 1);
      console.log(`Remaining ${productName} pieces: 0`);
    } else {
      console.log(`Remaining ${productName} pieces: ${product.quantity}`);
    }
  }
}



addProduct({ name: "Apple", quantity: 10 });
addProduct({ name: "apple", quantity: 5 });
addProduct({ name: "Banana", quantity: 8 });

removeProduct("apple", 8);
removeProduct("apple", 10);
removeProduct("banana", 2);
removeProduct("mango", 3);

// 6️ Display the final inventory
console.log("Final Inventory:", inventory);
