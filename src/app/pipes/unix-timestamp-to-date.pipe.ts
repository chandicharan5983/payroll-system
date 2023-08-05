import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixTimestampToDate',
  standalone: true,
})
export class UnixTimestampToDatePipe implements PipeTransform {
  transform(unixTimestamp: number): string {
    // Convert Unix timestamp to milliseconds
    const date = new Date(unixTimestamp * 1000);

    // Get the day, month, and year
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    // Convert the day to a string with the appropriate suffix (e.g., 1st, 2nd, 3rd, 4th, etc.)
    let dayString = day.toString();
    const suffix = ['th', 'st', 'nd', 'rd'];
    const digit = day % 10;
    if (digit >= 1 && digit <= 3 && (day < 11 || day > 13)) {
      dayString += suffix[digit];
    } else {
      dayString += suffix[0];
    }

    // Get the month name
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthName = monthNames[monthIndex];

    return `${dayString} ${monthName}`;
  }
}
