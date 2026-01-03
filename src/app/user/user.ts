import {Component, computed, EventEmitter, input, Input, Output} from '@angular/core';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  // @Input({required: true}) name!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) id!: string;
  @Output() selected = new EventEmitter();

  // avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => "/assets/users/" + this.avatar);

  selectedUser(){
    this.selected.emit(this.id);
  }

}
