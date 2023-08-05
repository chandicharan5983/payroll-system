import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnixTimestampToDatePipe } from 'src/app/pipes/unix-timestamp-to-date.pipe';
import { DateOfBirthSortPipe } from 'src/app/pipes/date-of-birth-sort.pipe';

@Component({
  selector: 'app-employee-events',
  standalone: true,
  imports: [CommonModule, UnixTimestampToDatePipe, DateOfBirthSortPipe],
  templateUrl: './employee-events.component.html',
  styleUrls: ['./employee-events.component.scss']
})
export class EmployeeEventsComponent {

  @Input() usersEventList!: any;
}
