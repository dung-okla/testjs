
const url =' https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com'

const login = async (email,password)=>{
    let payload ={
        email,password
    }
const response = await fetch(`${url}/login`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
       
        body: JSON.stringify(payload)
    })
 
    return await response.json();

}
const newToken =async()=>{
    let payload ={
       
        refresh: localStorage.getItem("refresh")
    }
    
   
    const response = await fetch(`${url}/login/get_new_token`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
       
        body: JSON.stringify(payload)
    })
 
    return await response.json();

}

const getPost= async()=>{
    const response = await fetch(`${url}/post`,{
        method:"GET",
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access")}`
        },
       
       
    })
 
    return await response.json();
}
export{
    login,
    newToken,
    getPost
}