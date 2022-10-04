import { useState, useEffect } from "react";
import { getTasks,updateTask,addTask,deleteTask} from "../apiFunctions/taskApi";
import "../styles/tasks.css"
import Plus_button from "./Plus_button_small.png"
import Back from "./Back";
const Tasks = ({User}) => {
    const [tasks, setTasks] = useState()
    useEffect( ()=>{
        getTasks(User.data._id).then(resp =>{
            setTasks(resp.data);
        });
    },[tasks])
    const changeStatus = async (taskId) =>{
        await updateTask(taskId);
    }
    const AddItem = async (e)=>{
        //addTask with userId, task ,status
        e.preventDefault();
        const taskvalue = e.target.task.value;
        if(taskvalue){
            await addTask(User.data._id,taskvalue,"incomplete");
            getTasks(User.data._id).then(resp =>{
                setTasks(resp.data);
            });
        }
        
    }
    const showForm = ()=>{
        const container = document.getElementById("add-container");
        
        if(container.style.display === ""){
            container.style.display = "block"
        }else{
            container.style.display = "";
        }
    }
    return (  
        <div className="tasks-page">
           <Back></Back>
            <h1>Tasks</h1>
            <div className="list-container">

                {!tasks? <h2>Loading...</h2>:
                tasks.map(task =>(
                    
                    <div className="list-item"key={task._id}><button onClick={()=>{deleteTask(task._id)}}>delete</button> <input onChange={()=>{changeStatus(task._id)}}defaultChecked={task.status === "complete"}type="checkbox" /><p key={task._id}>{task.task}</p></div>
                )
                )
                }

            <div className="image-container">
                <img onClick={showForm}id="plusIcon"src={Plus_button} alt="" />
            </div>
                <form id="Add-form" onSubmit={e=>{AddItem(e)}}>
                    <div id="add-container">
                        <input  id="inputbox"name="task"type="text" />
                        <button id="inputbutton"type="submit">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Tasks;