import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PayslipComponent } from './payslip/payslip.component';
import { TaxCalculatorComponent } from './tax-calculator/tax-calculator.component';
import { EmployeeEventsComponent } from '../shared-component/employee-events/employee-events.component';
import { UpcomingHolidaysComponent } from '../shared-component/upcoming-holidays/upcoming-holidays.component';
import { QuickLinksComponent } from '../shared-component/quick-links/quick-links.component';



@NgModule({
  declarations: [
    MainPageComponent,
    UserListComponent,
    UserDetailsComponent,
    PayslipComponent,
    TaxCalculatorComponent
  ],
  imports: [
    CommonModule,
    EmployeeEventsComponent,
    QuickLinksComponent,
    UpcomingHolidaysComponent
  ]
})
export class MainContainerModule { }
