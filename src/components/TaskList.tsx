import { useState } from "react";
import { TextField, Button, List, ListItem, Box } from '@mui/material';

interface Task {
    text: string;
    state: boolean;
}

const TaskList = () => {
    const [taskList, setTaskList] = useState<Task[]>([]);
    const [task, setTask] = useState<string>("");

    const onAddTask = () => {
        if (task === "") {
            alert("No se puede agregar una tarea vacía");
            return;
        }
        const newTask: Task = { text: task, state: false };
        setTaskList([...taskList, newTask]);
        setTask("");
    }

    return (
        <Box>
            <TextField 
                label="Add a task" 
                variant="outlined" 
                value={task} 
                onChange={(event) => setTask(event.target.value)}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={onAddTask} fullWidth>
                Añadir
            </Button>
            <List>
                {taskList.map((task, index) => (
                    <ListItem key={index}>{task.text}</ListItem>
                ))}
            </List>
        </Box>
    )
}

export default TaskList;
