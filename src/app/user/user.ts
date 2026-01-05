import {Component, computed, EventEmitter, Input, Output} from '@angular/core';
import {UserObj} from './userObj';
import {Card} from '../shared/card/card';

@Component({
  selector: 'app-user',
  imports: [
    Card
  ],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  @Input({required: true}) user!: UserObj;
  @Input({required: true}) selectUser!: boolean;
  @Output() selected = new EventEmitter();

  imagePath = computed(() => "/assets/users/" + this.user.avatar);

  selectedUser(){
    this.selected.emit(this.user.id);
  }

}
