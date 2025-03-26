const myString= 'abcd edf  '
console.log(myString.toUpperCase())
//cat string theo index
console.log(myString.substring(0,5))
//remove the space at fist and last
console.log(myString.trim()) 

console.log(myString.replace('a','k'))

const string = 'dung-25'
console.log(string.split('-'))


const employees = [
    {id:1, name:"dung", age:55},
    {id:1, name:"gg", age:55},
    {id:1, name:"aa", age:55},
    {id:1, name:"bb", age:55},
]

employees.forEach((e)=>{
    e.searchStr = `${e.id}|${e.name}|${e.age}`
    if(e['searchStr'].includes("g")){
        console.log(e)
    }
})
  
const myArr= [1,2,3]
myArr.push(4)//them gia tri vao cuoi mang
myArr.pop()//xoa phan tu cuoi cung
myArr.shift()// xoa phan tu cuoi
myArr.unshift(-11)//chen phan tu dau tien 
myArr.splice(2,3) // xoa tu so 2 ,3 phan tu tieo theo
console.log(myArr)

const isGt5 = myArr.every(function (number){
    return number<2
})

const myObj = {
    id:1, name: 'dung', age:55
}
console.log(Object.keys(myObj))
console.log(Object.values(myObj))

Object.keys(myObj).forEach(function(key){
    console.log(myObj[key])
})

