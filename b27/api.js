const baseUrl ='https://api-todolist-multiuser.onrender.com/'
const getData = async (endpoint)=>
{
    const response = await fetch (`${baseUrl}${endpoint}`)
    const data = await response.json()
    return  data
}
export {
    getData
}