import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { EMPLOYEES_LIST, EMPLOYEES_LOAN_DETAILS, PAYSLIP_LIST, QUICK_URL, USER_DETAILS } from '../constant/api-response.constant';
import { HOLIDAY_LIST, usersDOB } from '../constant/holiday.constant';

@Injectable({
  providedIn: 'root'
})
export class ApiCallManageService {

  constructor(
    private http: HttpClient
  ) { }

  getEmployeeList() {
    // this.http.get<any>('https://payroll-statem.com/my-employee-list')
    return  EMPLOYEES_LIST;
  }

  getEmployeeLoanDetails() {
    // this.http.get<any>('https://payroll-statem.com/my-employee-loan-details') 
    return EMPLOYEES_LOAN_DETAILS;
  }

  getEmployeePayslipList() {
    // this.http.get<any>('https://payroll-statem.com/my-employee-payslip-list') 
    return PAYSLIP_LIST;
  }

  getUserDetails() {
    // this.http.get<any>('https://payroll-statem.com/user-details') 
    return USER_DETAILS;
  }

  getQuickUrl() {
    // this.http.get<any>('https://payroll-statem.com/quick-url') 
    return QUICK_URL;
  }

  getHolidayList() {
    // this.http.get<any>('https://payroll-statem.com/hoiday-list') 
    return HOLIDAY_LIST;
  }

  getUserDOBList() {
    // this.http.get<any>('https://payroll-statem.com/hoiday-list') 
    return usersDOB;
  }
}
