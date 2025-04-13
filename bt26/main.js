import { getData,postData } from "./api.js";
import { bindRows } from "./util.js";
const jobList = document.querySelector('.app')
const inputE = document.getElementById('task')
let btnSave = document.getElementById('save')
btnSave.onclick = ()=>{
    console.log('ksjdfkj')
}

const onMounted = async () =>{
    const job = await getData()
    console.log(job)
    bindRows(jobList, job)
}
const onSave = async () =>{
    const inputValue = inputE.value.trim();
    if (!inputValue) return;
    const body = {
        title: inputValue,
        completed: false,
    };
    await postData(body);
    inputE.value = "";
    onMounted();


}
console.log(inputE.value)
btnSave.onclick = onSave
onMounted()
