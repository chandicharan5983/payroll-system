import { Component } from '@angular/core';
import { USER_DETAILS } from './constant/api-response.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'payroll-system';
  showUserDetailsPopup: boolean = false;
  userDetails = USER_DETAILS

  onClickUserDetailsPopup(event: boolean): void {
    this.showUserDetailsPopup = event;
  }
}
