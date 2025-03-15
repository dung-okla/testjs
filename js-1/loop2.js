
const companies = [

    { id: 1, name: 'Tech Corp' },
    
    { id: 2, name: 'Finance Inc' },
    
    { id: 3, name: 'Health Plus' }
    
    ];

    const employees = [

        { name: 'Alice', companyId: 1, salary: 15000000 },
        
        { name: 'Bob', companyId: 1, salary: 18000000 },
        
        { name: 'Charlie', companyId: 2, salary: 22000000 },
        
        { name: 'David', companyId: 2, salary: 20000000 },
        
        { name: 'Eve', companyId: 3, salary: 25000000 }
        
        ];


  /*
                                                                                                                                                                                            
                                                                                                                                                                                          
    for                                                                                                                                                                                   
                                                                                                                                                                                          
   ┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐   
   │                                                                                                                                                                                  │   
   │  employee of employees                                                                                                                                                           │   
   │                                                                                                                                                                                  │   
   │                                                                                                                                                                                  │   
   │employee.companyId == companies[employee.companyId-1].id                                                                                                                          │   
   │                   │                                                                                                                                                              │   
   │                   │                                                                                                                                                              │   
   │                   │   true                                                                                                                                                       │   
   │                   │                                                                              true                                                                            │   
   │                   ▼                                                                                                                                                              │   
   │!companies[employee.companyId - 1].employees && !companies[employee.companyId-1].averageSalary  ───────────► companies [employee.companyId - 1].employees=[]                       │   
   │                                                                                                                             companies[employee.companyId - 1].averageS lary=0    │   
   │                                                                                                                                                                                  │   
   │ companies[employee.companyId-1].employees.push(employee)                                                                                                                         │   
   │                 companies[employee.companyId-1].averageSalary= (employee.salary+companies[employee.companyId-1].aver geSalary)/companies[employee.companyId-1].employees.length  │   
   │                                                                                                                                                                                  │   
   │                                                                                                                                                                                  │   
   │                                                                                                                                                                                  │   
   │                                                                                                                                                                                  │   
   │                                                                                                                                                                                  │   
   └──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘   
                                                                                                                                                                                          
    ket qua la  companies                                                                                                                                                                 
                                                                                                                                                                                          
                                                                                                                                                                                          
                                                                                                                                                                                          */
      
        for(employee of employees){
            if(employee.companyId == companies[employee.companyId-1].id){
              if(!companies[employee.companyId - 1].employees && !companies[employee.companyId-1].averageSalary) {
                companies[employee.companyId - 1].employees=[]
                companies[employee.companyId - 1].averageSalary=0
              }
                companies[employee.companyId-1].employees.push(employee)
                companies[employee.companyId-1].averageSalary= (employee.salary+companies[employee.companyId-1].averageSalary)/companies[employee.companyId-1].employees.length
            }
        }
      
  
 
    console.log(companies)
    