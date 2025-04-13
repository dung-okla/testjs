const baseUrl ='http://localhost:3000'
const getData = async (endpoint)=>
{
    const response = await fetch (`${baseUrl}/${endpoint}`)
    const data = await response.json()
    return  data
}
const postData =async (endpoint, payload) =>{
    const response = await fetch(`${baseUrl}/${endpoint}`,{
        body: JSON.stringify(payload)
    })
}
export{
    getData,
    postData
}