import {DummyTask, dummyTasks} from './dummy-tasks';
import {Injectable} from '@angular/core';

let taskArray: DummyTask[] = dummyTasks;
@Injectable({providedIn: 'root'})
export class TaskService{
  selectedUserTasks=(userId:string)=>taskArray.filter(task => task.userId === userId);
  removeUserTask(id:string){
    taskArray =  taskArray.filter(task => task.id !== id);
  }
  addTask(task:DummyTask){
    let maxTaskId = taskArray.map(task => task.id).sort()[taskArray.length - 1];
    let maxId = Number(maxTaskId.replace(/\D/g, ""))+1;
    task.id = 't'+maxId;
    console.log("task->"+task);
    taskArray.push(task);
  }
}
