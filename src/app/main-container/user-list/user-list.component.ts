import { Component } from '@angular/core';
import { EMPLOYEES_LIST } from 'src/app/constant/api-response.constant';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  employeesList = EMPLOYEES_LIST

}
