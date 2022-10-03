import { useEffect, useState } from "react";
import { getTasks, updateTask } from "../apiFunctions/taskApi";
import "../styles/taskcard.css"
import { useNavigate } from "react-router-dom";
const TaskCard = ({userId}) => {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState()
    useEffect( ()=>{
        getTasks(userId).then(resp =>{
            setTasks(resp.data);
            
        });
        
        
    },[tasks])
    const changeStatus = async (taskId) =>{
        await updateTask(taskId);
    }
    return (  
        <div className="task-card card" onClick={()=>{navigate("/tasks")}}>
           
            <h1>Task</h1>
            {!tasks? <h2>Loading...</h2>:
              tasks.slice(0,3).map(task =>(
                
                <div className="list-item"key={task._id}> <input onChange={()=>{changeStatus(task._id)}}defaultChecked={task.status === "complete"}type="checkbox" /><p key={task._id}>{task.task}</p></div>
              )
            )
            }
        </div>
    );
}
 
export default TaskCard;