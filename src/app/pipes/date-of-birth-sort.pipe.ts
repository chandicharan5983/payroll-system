import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateOfBirthSort',
  standalone: true
})
export class DateOfBirthSortPipe implements PipeTransform {

  transform(array: any[]): any[] {
    if (!Array.isArray(array)) return [];

    return array.sort((a, b) => {
      const dateA = new Date(a.date_of_birth);
      const dateB = new Date(b.date_of_birth);

      // Compare months first
      const monthDiff = dateA.getMonth() - dateB.getMonth();
      if (monthDiff !== 0) {
        return monthDiff;
      }

      // If the months are the same, compare dates
      return dateA.getDate() - dateB.getDate();
    });
  }
}

