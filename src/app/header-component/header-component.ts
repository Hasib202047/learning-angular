import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header-component',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
  standalone: true,
})
export class HeaderComponent {

}
