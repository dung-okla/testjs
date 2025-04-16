import { getPost,newToken } from "./api.js";

const text = document.querySelector('h1')

const onMounted =async() => {
    if(data.detail == 'token expired'){
        const fix = await newToken()
     
        localStorage.setItem("access", fix.access);
        localStorage.setItem("refresh", fix.refresh);
        await getPost()
       }
   let data = await getPost()
   text.innerHTML += data
   console.log(data)
   
}
onMounted()