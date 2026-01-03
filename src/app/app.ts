import { Component, signal } from '@angular/core';
import {HeaderComponent} from './header-component/header-component';
import {User} from './user/user';
import {DUMMY_USERS} from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Learning');
  users = DUMMY_USERS;

  onSelectUser(id:string){
    console.log(`users selected: ${id}`);
  }
}
