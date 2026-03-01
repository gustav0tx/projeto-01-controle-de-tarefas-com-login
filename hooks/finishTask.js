const finishTask = (id, tasksList, setTasksList) => {
    const updatedTasks = tasksList.map(task => {
        if (task.id === id) {
            return { ...task, isFinished: !task.isFinished };
        }
        return task;
    });
    setTasksList(updatedTasks);
}

export default finishTask