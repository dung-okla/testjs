const member=[
    {id:1 , name:'dung'},
    {id:2 , name:'nam'},
    {id:3 , name:'son'},
    {id:4 , name:'giang'},
    {id:5 , name:'vuong'},
]

setTimeout(()=>{
  
    console.log("di hoc")
    setTimeout(()=>{
  
        console.log("tot nghiep")
        setTimeout(()=>{
  
            console.log("di lam")
        },5000)
    },1000)
},3000)