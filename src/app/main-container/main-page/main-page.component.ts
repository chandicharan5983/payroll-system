import { Component, OnInit } from '@angular/core';
import { QUICK_URL } from 'src/app/constant/api-response.constant';
import { HOLIDAY_LIST, usersDOB } from 'src/app/constant/holiday.constant';
import { HOLIDAY_TYPE } from 'src/app/interfaces/layout.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  holidayList: Array<HOLIDAY_TYPE> = HOLIDAY_LIST;
  usersDOB = usersDOB;
  urlList = QUICK_URL;

  constructor() {}

  ngOnInit(): void {
    
  }

}
