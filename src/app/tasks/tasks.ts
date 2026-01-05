import {Component, Input} from '@angular/core';
import {Task} from './task/task';
import {NewTask} from './new-task/new-task';
import {TaskService} from './task.service';
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

  constructor(private taskService: TaskService) {

  }

  print(){
    return this.name;
  }

  userTasks = ()=> this.taskService.selectedUserTasks(this.id);

  onCompletedTask(id:string){
    this.taskService.removeUserTask(id);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }
  onCancelAddTask(){
    this.isAddingTask = false;
  }
}
