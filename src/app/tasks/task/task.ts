import {Component, Input} from '@angular/core';
import {DummyTask} from '../dummy-tasks';
import {Card} from '../../shared/card/card';
import {DatePipe} from '@angular/common';
import {TaskService} from '../task.service';

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

  constructor(private taskService: TaskService) {
  }

  completed(){
    this.taskService.removeUserTask(this.task.id);
  }

}
