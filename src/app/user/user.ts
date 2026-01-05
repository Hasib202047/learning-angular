import {Component, computed, EventEmitter, Input, Output} from '@angular/core';
import {UserObj} from './userObj';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  // @Input({required: true}) name!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) id!: string;
  @Input({required: true}) user!: UserObj;
  @Input({required: true}) selectUser!: boolean;
  @Output() selected = new EventEmitter();

  imagePath = computed(() => "/assets/users/" + this.user.avatar);

  selectedUser(){
    this.selected.emit(this.user.id);
  }

}
