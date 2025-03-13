/*
                                                             
     sắp xếp tăng dần                                        
                                                             
                                                             
     var arr ;                                               
                                                             
                                                             
       for                                                   
          │                                                  
      ┌───▼─────────────────────────────────────────┐        
      │(var i=0; i<arr.length-1;i++)                │        
      │    ▼                                        │        
      │   for                                       │        
      │     ┌──────────────────────────────────┐    │        
      │     │─var j=i+1    ; j<arr.length;j++│    │        
      │     │       var tml =arr[i]            │    │        
      │     │    arr[i] < arr[j]               │    │        
      │     │           │                      │    │        
      │     │           │true                  │    │        
      │     │           │                      │    │        
      │     │           ▼                      │    │        
      │     │                                  │    │        
      │     │        arr[j]=tml                │    │        
      │     │        arr[i]=arr[j]             │    │        
      │     └──────────────────────────────────┘    │        
      │                                             │        
      └─────────────────────────────────────────────┘        
                                                             
*/

var arr = [2, 3, 4, 1, 0, 8] ;

for(var i=0; i<arr.length;i++) {
for(var j=i+1    ; j<arr.length;j++){
   var tml=arr[i];
   if(  arr[i] > arr[j]){
                      
      arr[i]=arr[j] 
      arr[j]=tml                     
   }

   
}

}
console.log(arr)