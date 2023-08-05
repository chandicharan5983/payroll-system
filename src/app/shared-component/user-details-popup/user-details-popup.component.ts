import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details-popup.component.html',
  styleUrls: ['./user-details-popup.component.scss']
})
export class UserDetailsPopupComponent {
  @Input() userDetails!: any;

}
