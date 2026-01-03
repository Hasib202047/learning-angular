import {Component, signal} from '@angular/core';
import {HeaderComponent} from './header-component/header-component';
import {User} from './user/user';
import {DUMMY_USERS} from './dummy-users';
import {Task} from './task/task';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, Task],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Learning');
  users = DUMMY_USERS;
  selectedUserId : string = '';
  get selectedUserName():string
  {
    return <string>DUMMY_USERS.find(e => e.id === this.selectedUserId)?.name;
  }

  onSelectUser(id:string){
    console.log("user id: "+id);
    this.selectedUserId = id;
  }
}
