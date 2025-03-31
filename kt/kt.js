// bai 1
function isEven(number){
    if(number )
    if(number % 2 === 0 ) return true
    else return false
}
 //bai 2

 function reverseString(str){
  let a= Array.from(str)
  a.reverse

    return String(a)
    
 }
 console.log(reverseString('kac'))
let arr = []
arr.length
//bai 3 
let sum = 0
for (let i=1 ; i<=100;i++ ){
    sum += i
}
 
//bai 4
function isPrime(number){
    if(number<2){
        return false
    }
    let check =0
    for(let i = 2 ; i<= number**(0.5);i++){
    if(number % i === 0){
        return false
    }
    }
    return true
   
}

//bai 5
function maxNumber(number){
  
    let myarr=[]
    for(let i =0; i<number.length;i++){
   if(number[i]%1 ==0){
    myarr.push(number[i])
   }
}
myarr.sort()
return myarr[myarr.length-1]
}
console.log(maxNumber([0,9]))
//bai 6
function countVowels(str){
    let count =0
     for(let i =0; i<str.length; i++){
        if(str[i]==='a') count++
        if(str[i]==='e') count++
        if(str[i]==='i') count++
        if(str[i]==='o') count++
        if(str[i]==='u') count++
     }
     return count

}
console.log(countVowels("abcio"))
//bai 7
function removeDuplicates(arr){
    let ob ={}
    let myarr=[]
    for(let i =0; i<arr.length;i++){
        if(ob[arr[i]]){
            myarr.push(arr[i])
        }
        ob[arr[i]]=arr[i]
    }
    return myarr
  
  
}
//bai 8
function isSquare(n){
    if(n**(0.5)% 1 === 0){
        return true
    }
    return false
}
//bai9
function deepClone(obj){
    return {...obj}
}
//bai 10
const customers = [ { id: 1, name: "Alice" },{ id: 2, name: "Bob" }];
const orders = [
  { id: 101, customerId: 1, total: 200 },
  { id: 102, customerId: 2, total: 150 },
  { id: 103, customerId: 1, total: 300 },
  { id: 104, customerId: 3, total: 400 },
  { id: 105, customerId: 2, total: 100 }
];
let myobj={}
for(let i =0; i<orders.length;i++){
    for(let j =1; j<orders.length-1;j++){
       if(orders[i].total>orders[j].total){
        let swap =orders[i]
        orders[i]=orders[j]
        orders[j]=swap
       }
    }
}
for(let i =0; i<orders.length;i++){
    if(myobj[orders[i].customerId]){
        myobj[orders[i].customerId].push(orders[i])
    }else{

        myobj[orders[i].customerId] = [orders[i]]
    }
}
customers.forEach(customer =>{
    customer.orders=myobj[customer.id]
  
})
console.log(customers)

