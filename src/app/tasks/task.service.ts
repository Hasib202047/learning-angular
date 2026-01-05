import {DummyTask, dummyTasks} from './dummy-tasks';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class TaskService{
  taskArray: DummyTask[] = dummyTasks;
  constructor() {
    const taskArray = localStorage.getItem("tasks");
    if(taskArray)
    {
      this.taskArray = JSON.parse(taskArray);
    }
  }

  selectedUserTasks=(userId:string)=>this.taskArray.filter(task => task.userId === userId);
  removeUserTask(id:string){
    this.taskArray =  this.taskArray.filter(task => task.id !== id);
    localStorage.setItem("tasks",JSON.stringify(this.taskArray));
  }
  addTask(task:DummyTask){
    let maxTaskId = this.taskArray.map(task => task.id).sort()[this.taskArray.length - 1];
    let maxId = Number(maxTaskId.replace(/\D/g, ""))+1;
    task.id = 't'+maxId;
    console.log("task->"+task);
    this.taskArray.push(task);
    localStorage.setItem("tasks",JSON.stringify(this.taskArray));
  }
}
