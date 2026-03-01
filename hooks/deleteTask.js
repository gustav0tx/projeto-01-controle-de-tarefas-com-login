const deleteTask = (taskId, tasksList, setTasksList) => {

    const filteredTasks = tasksList.filter(task => task.id !== taskId)
    
    setTasksList(filteredTasks)
}

export default deleteTask