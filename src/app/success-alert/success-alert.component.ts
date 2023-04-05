import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-success-alert',
//   templateUrl: './success-alert.component.html',
//   styleUrls: ['./success-alert.component.scss']
// })
// export class SuccessAlertComponent {
//   serverName=""
//   Show=false
//   serverInfo="No server has been created!"
  
  
//   // ShowServer()
//   // {
//   //     this.serverInfo='server name is '+this.serverName;
//   // }

// }
@Component({
  selector: 'app-success-alert',
  template: `      
      <ng-template>
          <button class="tab-button" 
                  (click)="login()">{{loginText}}</button>
          <button class="tab-button" 
                  (click)="signUp()">{{signUpText}}</button>
      </ng-template>
  `})
export class SuccessAlertComponent {
    loginText = 'Login';
    signUpText = 'Sign Up'; 
    lessons = ['Lesson 1', 'Lessons 2'];

    login() {
        console.log('Login');
    }

    signUp() {
        console.log('Sign Up');
    }
}
