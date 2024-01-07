import {task} from '../models/tasks';

let tasks : task[] = []; //Simulate a database with a list 


export const getAllTasks = (): task[]=> {
    return tasks;
}

export const createTask = (title: string): task => {
    const newTask: task = {id : tasks.length + 1, title, completed: false};
    tasks.push(newTask);
    return newTask;
};

export const getTaskByTitle = (title: string): task[] | undefined => {
    return tasks.filter(task => task.title.includes(title));
}

