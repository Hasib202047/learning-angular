import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DummyTask} from '../dummy-tasks';
import {Card} from '../../shared/card/card';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [
    Card,
    DatePipe
  ],
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
