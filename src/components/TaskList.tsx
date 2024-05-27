import { useState } from "react";
interface Task {
    text: string;
    state: boolean;
}

const TaskList = () => {    
    const [taskList, setTaskList] = useState<Task[]>([]);
    const [task, setTask] = useState<string>("");

    const onAddTask = () => {
        const newTast: Task = {text: task, state: false};
        if(task === "") return alert("No se puede agregar una tarea vacia");
        else
            setTaskList([...taskList, newTast]);
        
        setTask("");
        
    }
    return (
        <>
            <input type="text" placeholder="Add a task" value={task} onChange={(event)=>setTask(event.target.value)}/>
            <button onClick={onAddTask}>Añadir</button>
            <ol>
                {taskList.map(task =>{
                    return <li key={task.text}>{task.text}</li>;
                })}
            </ol>
        </>

    )

}

export default TaskList;