import { getData } from "./api.js";

const onMounted=async() => {
    const data = await Promise.all([getData('Dung/todos/'),getData('Son/todos/')])
    console.log(data)
}
onMounted();