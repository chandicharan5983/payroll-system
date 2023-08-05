import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quick-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.scss']
})
export class QuickLinksComponent {
  @Input() urlList: any = [];

  openUrl(event: any) {
    window.open(event?.link)
  }

}
