import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-container/main-page/main-page.component';
import { UserListComponent } from './main-container/user-list/user-list.component';
import { UserDetailsComponent } from './main-container/user-details/user-details.component';
import { PayslipComponent } from './main-container/payslip/payslip.component';
import { TaxCalculatorComponent } from './main-container/tax-calculator/tax-calculator.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'payslip', component: PayslipComponent },
  { path: 'tax-calculator', component: TaxCalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
