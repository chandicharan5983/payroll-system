import { Component, OnInit } from '@angular/core';
import { PAYSLIP_LIST } from 'src/app/constant/api-response.constant';
import { ApiCallManageService } from 'src/app/services/api-call-manage.service';

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.scss']
})
export class PayslipComponent implements OnInit {

  payslipList!: any;

  constructor(
    private apiCallService: ApiCallManageService
  ) {}

  ngOnInit() {
    this.payslipList = this.apiCallService.getEmployeePayslipList();
  }
}
