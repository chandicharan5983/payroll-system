import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HOLIDAY_TYPE } from 'src/app/interfaces/layout.interface';
import { HOLIDAY_LIST } from 'src/app/constant/holiday.constant';

@Component({
  selector: 'app-upcoming-holidays',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upcoming-holidays.component.html',
  styleUrls: ['./upcoming-holidays.component.scss']
})
export class UpcomingHolidaysComponent implements OnInit {

  @Input() message: any;
  @Input() holidayList!: Array<HOLIDAY_TYPE>;

  ngOnInit(): void {
    console.log(this.message)
  }


}
