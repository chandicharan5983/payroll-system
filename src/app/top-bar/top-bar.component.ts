import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  @Output() onClickUserDetailsPopup = new EventEmitter()

  userDetailPopup: boolean = false;

  openUserDetailsPopup(event: boolean): void {
    this.userDetailPopup = !this.userDetailPopup;
    this.onClickUserDetailsPopup.emit(this.userDetailPopup);
  }
}
