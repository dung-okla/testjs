import { getData, postData ,DeleteData,PutData} from "./api.js";
import { bindRows } from "./util.js";

const inputE = document.getElementById("task");
const btnSave = document.getElementById("save");
const jobList = document.querySelector(".todoList");

const onDelete=async(id)=>{
   await DeleteData(id)
   onMounted()
}
const onPut=async(id,payload)=>{
    await PutData(id,payload)
    onMounted()
 }
const onMounted = async () => {
    const job = await getData();
    jobList.innerHTML = ""; 
    bindRows(jobList, job);
    jobList.onclick = (e) => {
        const target = e.target;
    
        if (target.classList.contains('delete')) {
            const id = target.getAttribute('data-id');
            onDelete(id);
        }
    
        if (target.classList.contains('put')) {
            const id = target.getAttribute('data-id');
            let todoItem = document.querySelector(`.todo[data-icon="${id}"]`);
           
            todoItem.innerHTML =`
                <div class="todoFormItem">
                    <input
                        type="text"
                        name="title"
                        class="item"
                        placeholder="What is task today"
                    />
                    <button class="putBtn">Update Task</button>
                </div>
            `;
    
            const inputE = todoItem.querySelector(".item");
            const btnPut = todoItem.querySelector(".putBtn");
    
            if (btnPut) {
                btnPut.onclick = () => {
                    const body = {
                        title: inputE.value.trim(),
                        completed: true,
                    };
                    onPut(id, body);
                };
            }
        }
    };
    
    }
    

const onSave = async () => {
    const inputValue = inputE.value.trim();
    if (!inputValue) return;
    const body = {
        title: inputValue,
        completed: true,
    };
    await postData(body);
    inputE.value = "";
    onMounted();
};

btnSave.onclick = onSave;
onMounted();

