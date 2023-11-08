import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title: string = 'Input Credentials to proceed';
  link: string = '#';
  onClick() {
    console.log('clicked');
    alert('clicked');
  }
}
