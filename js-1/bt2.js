function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const customers = Array.from({ length: 3000 }, (_, i) => ({
    id: i + 1,
    name: `customer ${i + 1}`
}));

// Generate orders
const orders = Array.from({ length: 50000 }, (_, i) => ({
    id: i + 1,
    customer_id: getRandomInt(1, 3000),
    productName: `productName ${i + 1}`
}));

console.time('dotSomething')
// orders.forEach((order)=>{
//     customers.forEach((customer)=>{
//         if(customer.id === order.customer_id){
//             order.customer=customer
//         }
//     })
// })
// console.log(orders)

const customerNew = {}
for(customer of customers){
    customerNew[customer.id]=customer
}
for(order of orders){
    order.customer=customerNew[order.customer_id]
}
console.log(orders)
console.timeEnd('dotSomething')