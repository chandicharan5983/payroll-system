import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  @Output() onClickUserDetailsPopup = new EventEmitter()

  openUserDetailsPopup(event: boolean): void {
    this.onClickUserDetailsPopup.emit(event);
  }
}
