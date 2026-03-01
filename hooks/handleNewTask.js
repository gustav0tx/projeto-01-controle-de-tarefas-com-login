const handleNewTask = (taskName, currentId, tasksList, setTasksList) => {

    const newTask = {
        id: currentId,
        name: taskName,
        isFinished: false
    }

    currentId = currentId++

    setTasksList([...tasksList, newTask])
}

export default handleNewTask