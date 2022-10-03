import Axios from "axios"
const TasksURI = "http://localhost:5000/tasks/"

const getTasks = async(id) =>{
    const URI = TasksURI + id;
    const getResponse = await Axios.get(URI);
    return getResponse;
}
const updateTask = async(taskId) =>{
    const URI = TasksURI + taskId;
    await Axios.put(URI);
}
const addTask = async(userId,task,status)=>{
    const addResponse = await Axios.post(TasksURI,{
        task,
        status,
        userId
    });
    return addResponse
}
export {getTasks,updateTask,addTask}