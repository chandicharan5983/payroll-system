import { Component, OnInit } from '@angular/core';
import { EMPLOYEES_LOAN_DETAILS } from 'src/app/constant/api-response.constant';
import { Employee } from 'src/app/interfaces/layout.interface';
import { ApiCallManageService } from 'src/app/services/api-call-manage.service';

@Component({
  selector: 'app-tax-calculator',
  templateUrl: './tax-calculator.component.html',
  styleUrls: ['./tax-calculator.component.scss']
})
export class TaxCalculatorComponent implements OnInit {

  constructor(
    private apiCallService: ApiCallManageService
  ) {}

  showPopup: boolean = false;

  employees!: Employee[];

  selectedEmployee: Employee | null = null;
  selectedMonth: string = '';
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  finalSalary: number | null = null;

  ngOnInit() {
    this.employees = this.apiCallService.getEmployeeLoanDetails();
  }


  showDetailedCalculation(employee: Employee): void {
    this.showPopup = !this.showPopup;
    this.selectedEmployee = employee;
    this.calculateTax(employee);
  }

  closePopup() {
    this.showPopup = false;
  }

  calculateTax(employee: Employee): void {
    const selectedSalary = employee.salaryByMonth[this.selectedMonth];
    this.finalSalary = selectedSalary > 25000 ? selectedSalary - (selectedSalary * 0.1) : selectedSalary;
  }
}
