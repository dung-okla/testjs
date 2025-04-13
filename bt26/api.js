const baseUrl ='https://api-todolist-multiuser.onrender.com/Dung/todos/'
const getData = async ()=>
{
    const response = await fetch (`${baseUrl}`)
    const data = await response.json()
    return  data
}
const postData =async (payload) =>{
    const response = await fetch(`${baseUrl}`,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
    })
    return response.json();
}
export{
    getData,
    postData
}