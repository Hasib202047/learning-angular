import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DummyTask} from '../dummy-tasks';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-new-task',
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Input({required : true}) userId!: string;
  @Output() cancel = new EventEmitter();
  enteredTitle= "";
  enteredSummary= "";
  enteredDate = "";

  constructor(private taskService: TaskService) {
  }

  cancelTheComponent(){
    this.cancel.emit();
  }

  submitTask(){
    let task:DummyTask = {
      id: '',
      userId: this.userId,
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    }
    this.taskService.addTask(task);
    this.cancel.emit();
  }
}
