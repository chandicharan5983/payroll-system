import { Component, OnInit } from '@angular/core';
import { QUICK_URL } from 'src/app/constant/api-response.constant';
import { HOLIDAY_LIST, usersDOB } from 'src/app/constant/holiday.constant';
import { HOLIDAY_TYPE } from 'src/app/interfaces/layout.interface';
import { ApiCallManageService } from 'src/app/services/api-call-manage.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  holidayList!: Array<HOLIDAY_TYPE>;
  usersDOB!: any;
  urlList!: any;

  constructor(
    private apiCallService: ApiCallManageService
  ) {}

  ngOnInit(): void {
    this.getAllAPIResponseOnload();
  }

  getAllAPIResponseOnload() {
    this.holidayList = this.apiCallService.getHolidayList();
    this.usersDOB = this.apiCallService.getUserDOBList();
    this.urlList = this.apiCallService.getQuickUrl();
  }
}
