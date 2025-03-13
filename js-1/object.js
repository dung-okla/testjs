
const companyA = [

    { id: 1, name: "Minh", age: 25 },
    
    { id: 2, name: "An", age: 30 },
    
    { id: 3, name: "Bình", age: 28 },
    
    { id: 4, name: "Dũng", age: 25 }
    
    ];
    
    const companyB = [
    
    { id: 5, name: "Bình", age: 32 },
    
    { id: 6, name: "Chi", age: 28 },
    
    { id: 7, name: "An", age: 29 },
    
    { id: 8, name: "Dũng", age: 25 }
    
    ];
/*
                                                                                                                                
                                                                                                                                
      bài 1. Viết hàm findCommonNames(arr1, arr2) để tìm những người trùng tên trong cả hai danh sách.                          
                                                                                                                                
                                                                                                                                
                const arr= arr1.concat(arr2)                                                                                    
                let myarr={}                    khởi tạo object chứa những tên trùng nhau                                       
                │                                                                                                               
                ▼                                                                                                               
              for                                                                                                               
               │  ┌────────────────────────────────────────────────────────────────────────────────────────────────────┐        
               └─►│let index = 0; index < arr.length; index++                                                          │        
                  │                                                                                                    │        
                  │                                                                                                    │        
                  │                                      true                                                          │        
                  │     myarr[`tên ${arr[index].name`] ───────────►   myarr[`tên ${arr[index].name}`].push(arr[index]) │        
                  │         │                                                                                          │        
                  │         │                                                                                          │        
                  │         │                                                                                          │        
                  │         ▼                                                                                          │        
                  │         fale                                                                                       │        
                  │                                                                                                    │        
                  │             myarr[`tên ${arr[index].name}`]=[arr[index]]                                           │        
                  │                                                                                                    │        
                  └────────────────────────────────────────────────────────────────────────────────────────────────────┘        
*/


// bài 1
   function findCommonNames(arr1, arr2){
        const arr= arr1.concat(arr2)
        let myarr={}
        for (let index = 0; index < arr.length; index++) {      
      
             if(myarr[`tên ${arr[index].name}`]){       
                
                myarr[`tên ${arr[index].name}`].push(arr[index])
             }else{
            
                myarr[`tên ${arr[index].name}`]=[arr[index]]
             }             
        }
      return myarr;
    }
   console.log(findCommonNames(companyA, companyB)) ;

//bài 2
/*
                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                            
          2. Viết hàm findCommonAgesAndName(arr1, arr2) để tìm những người có cùng độ tuổi và tên trong cả hai danh sách.                                                                                                                                   
                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                            
                  const arr= arr1.concat(arr2)                                                                                                                                                                                                              
                  let myarr=[]                    khởi tạo object chứa những tên trùng nhau                                                                                                                                                                 
                  │                                                                                                                                                                                                                                         
                  ▼                                                                                                                                                                                                                                         
                for                                                                                                                                                                                                                                         
                 │  ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐          
                 └─►│let index = 0; index < arr.length; index++                                                                                                                                                                                  │          
                    │                                                                                                                                                                                                                            │          
                    │                                                                                                                                                                                                                            │          
                    │                                      true                                                                                                                                                                                  │          
                    │     myarr[`tên ${arr[index].name`] ───────────►   myarr[`tên ${arr[index].name}`].push(arr[index])                                                                                                                         │          
                    │         │                                                                                                                                                                                                                  │          
                    │         │                                                                                                                                                                                                                  │          
                    │         │                                                     myarr[`tên ${arr[index].name}`].length >=2                                                                                                                   │          
                    │         ▼                                                              │                                                                                                                                                   │          
                    │         fale                                                           │                                                                                                                                                   │          
                    │                                                                        └►                                                                                                                                                  │          
                    │             myarr[`tên ${arr[index].name}`]=[arr[index]]               for                                                                                                                                                 │          
                    │                                                                             ▼                                                                                                                                              │          
                    │                                                               ┌────────────────────────────────────────────────────────────────────────────────────────────────────┐                                                       │          
                    │                                                              ►│let index = 0; index < arr.length; index++                                                          │                                                       │          
                    │                                                               │                                                                                                    │                                                       │          
                    │                                                               │                                                                                                    │                                                       │          
                    │                                                               │                                      true                                                          │                                                       │          
                    │                                                               │     myarr[`tên tuổi trùng nhau  `] ───────────►   myarr[`tên  tuổi trùng nhau }`].push(arr[index]) │                                                       │          
                    │                                                               │         │                                                                                          │                                                       │          
                    │                                                               │         │                                                                                          │                                                       │          
                    │                                                               │         │                                                                                          │                                                       │          
                    │                                                               │         ▼                                                                                          │                                                       │          
                    │                                                               │         fale                                                                                       │                                                       │          
                    │                                                               │                                                                                                    │                                                       │          
                    │                                                               │             myarr[`tên  tuổi trùng nhau }`]=[arr[index]]                                           │                                                       │          
                    │                                                               │                                                                                                    │                                                       │          
                    │                                                                └───────────────────────────────────────────────────────────────────────────────────────────────────┴┘                                                      │          
                    │                                                                                                                                                                                                                            │          
                    │                                                                                                                                                                                                                            │          
                    └────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘          
                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                            */
function findCommonAgesAndName(arr1, arr2){
    const arr= arr1.concat(arr2)
    let myarr={}
    for (let index = 0; index < arr.length; index++) {      

         if(myarr[`tên ${arr[index].name}`]){    
            myarr[`tên ${arr[index].name}`].push(arr[index])   
            let age =myarr[`tên ${arr[index].name}`]
            if(age.length >=2){

                for(let i =0;i<age.length ;i++){
                    if( myarr[`tên ${age[i].name}và tuổi ${age[i].age} trùng nhau`]){
                        myarr[`tên ${age[i].name}và tuổi ${age[i].age} trùng nhau`].push(age[i])
                    }
                    else{
                        myarr[`tên ${age[i].name}và tuổi ${age[i].age} trùng nhau`]=[age[i]]
                    }
                }
            }          
         }else{
            myarr[`tên ${arr[index].name}`]=[arr[index]]
         }             
    }
  return myarr;
}
console.log(findCommonAgesAndName(companyA, companyB)) ;
   