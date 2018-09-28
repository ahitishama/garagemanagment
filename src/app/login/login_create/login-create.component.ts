import { Component } from '@angular/core';

@Component({
  selector : 'app-login-create',
  templateUrl : 'login-create.component.html',
  styleUrls: ['login-create.component.css']
})


export class LoginCreateComponent {
  username = 'NO CONTENT';
  twowaydata = 'NO CONTENT';

  onLoginPage(targetID: HTMLTextAreaElement) {
    this.username = targetID.value;
  }


  twoWay() {
    this.twowaydata = this.twowaydata;
  }
}

