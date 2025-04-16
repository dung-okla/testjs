import { login } from "./api.js";

const email = document.querySelector('#email')
const password = document.querySelector('#password')
const btn = document.querySelector('button')
const onLogin = async() =>{
    const data = await login(email.value,password.value)
    console.log(await data)
    if (data.access && data.refresh) {
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
        alert("Login successful!");
       
        window.location.href = '/post.html';
      } else {
        alert("Invalid login");
      }
   
}

 btn.onclick = onLogin