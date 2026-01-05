import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DummyTask} from '../dummy-tasks';

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
  @Output() submit = new EventEmitter();
  enteredTitle= "";
  enteredSummary= "";
  enteredDate:Date = new Date();

  cancelTheComponent(){
    this.cancel.emit();
  }

  submitTask(){
    let task:DummyTask = {
      id: '',
      userId: this.userId,
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate.toString()
    }
    this.submit.emit(task);
  }
}
