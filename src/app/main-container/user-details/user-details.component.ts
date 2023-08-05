import { Component } from '@angular/core';
import { USER_DETAILS } from 'src/app/constant/api-response.constant';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

  userDetails = USER_DETAILS;

}
