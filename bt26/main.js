import { getData,postData } from "./api.js";
import { bindRows } from "./util.js";
const jobList = document.querySelector('.app')
const inputE = document.getElementById('task')
const btnSave = document.getElementById('save')
const onMounted = async () =>{
    const job = await getData()
    console.log(job)
    bindRows(jobList, job)
}
const onSave = async () =>{
    const inputValue = inputE.value
    console.log(inputValue)
    const body ={
        title:inputValue,
    completed:true
       
    }
    await  postData(body)
    inputE.value = '';  
onMounted()


}

btnSave.onclick = onSave
onMounted()