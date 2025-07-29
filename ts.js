const menu = [
  { name: "biriyani", price: 8 },
  { name: "friedrice", price: 7 },
  { name: "noodles", price: 4 },
  { name: "mandhi", price: 10 },
];

const cashinRegister = 100;
const orderQueue = [];
const nextOrderId = 1;

const addItemToMenu = (item) => {
  menu.push(item);
};

const placeOrder = (OrderItem) => {
  const item = menu.find((i) => i.name === OrderItem);
  cashinRegister += item.price;
  const order = { id: nextOrderId++, food: item, status: "ordered" };
  orderQueue.push(order);
  return order;
};

const completeOrder = (orderId) => {
  const order = orderQueue.find((item) => item.id === orderId);
  order.status = "completed";
  return order;
};

addItemToMenu({ name: "chicken chilli", price: 12 });
addItemToMenu({ name: "chicken kondattam", price: 10 });
addItemToMenu({ name: "chicken pollichath", price: 15 });

placeOrder("biriyani");
completeOrder(1);


console.log(menu)
console.log(cashinRegister)
console.log(orderQueue)
