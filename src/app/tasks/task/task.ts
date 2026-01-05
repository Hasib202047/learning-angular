import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DummyTask} from '../dummy-tasks';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})

export class Task {
  @Input({required:true}) task!: DummyTask;
  @Output() selectedTask = new EventEmitter<string>();

  completed(){
    this.selectedTask.emit(this.task.id);
  }

}
