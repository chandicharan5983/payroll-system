import { Component, OnInit } from '@angular/core';
// import { EMPLOYEES_LIST } from 'src/app/constant/api-response.constant';
import { ApiCallManageService } from 'src/app/services/api-call-manage.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private apiCallService: ApiCallManageService) {}

  employeesList: any = []

  ngOnInit() {
    this.employeesList =  this.apiCallService.getEmployeeList();
  }



}
