async function displayCart(userCart) {
  console.log("Item adicionados no carriho: ");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1} ${item.name} - R$ ${item.price} | ${
        item.quantity
      } | Subtotal ${item.subTotal(userCart)}`
    );
  });
}

async function addItem(userCart, item) {
  userCart.push(item);
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) userCart.splice(index, 1);
}

async function removeItem(userCart, item) {
  const deleteIndex = index - 1;

  if (index > 0 && index < userCart.length) userCart.splice(deleteIndex, 1);
}

async function calculeTotal(userCart) {
  console.log("Total adicionado: ");
  const reduce = userCart.reduce((total, item) => total + item.subTotal(), 0);
  console.log(`Valor = R$ ${reduce}`);
}

export { displayCart, addItem, deleteItem, removeItem, calculeTotal };
