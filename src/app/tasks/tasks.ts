import {Component, Input} from '@angular/core';
import {Task} from './task/task';
import {DummyTask, dummyTasks} from './dummy-tasks';
import {NewTask} from './new-task/new-task';
let taskArray: DummyTask[] = dummyTasks;
@Component({
  selector: 'app-tasks',
  imports: [
    Task,
    NewTask
  ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({required: true}) name !: string;
  @Input({required: true}) id !: string;
  isAddingTask = false;

  print(){
    return this.name;
  }

  userTasks = ()=> taskArray.filter(task => task.userId === this.id);

  onCompletedTask(id:string){
    taskArray =  taskArray.filter(task => task.id !== id);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }
  onCancelAddTask(){
    this.isAddingTask = false;
  }
  onSubmitTask(task:DummyTask){
    let maxTaskId = taskArray.map(task => task.id).sort()[taskArray.length - 1];
    let maxId = Number(maxTaskId.replace(/\D/g, ""))+1;
    task.id = 't'+maxId;
    console.log("task->"+task);
    taskArray.push(task);
    this.isAddingTask = false;
  }
}
