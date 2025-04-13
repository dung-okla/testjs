import { getData,postData } from "./api.js";
import { bindRows } from "./ultil.js";
const jobList = document.querySelector('.job-list')
const inputE = document.querySelector('input')
const onMounted = async () =>{
    const job = await getData('job')
    console.log(job)
    bindRows(jobList, job)
}
const onSave = () =>{
    const inputValue = inputE.value
    const body ={
        name: inputValue,
        id:3
    }
    postData('job', body)

}
onMounted()