import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MENU_LIST } from 'src/app/constant/menu-list.constant';
import { MENU_LIST_INTERFACE } from 'src/app/interfaces/layout.interface';
import { AuthService } from 'src/app/services/auth.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent {


  menuList!: Array<MENU_LIST_INTERFACE>;
  currentUrl : string = 'main';

  constructor(
    private router: Router,
    private auth: AuthService,
    ) { 
      this.menuList = MENU_LIST;
      this.getUpdatedUrl();
  }


  ngOnInit(): void {
  }
  
  getUpdatedUrl() {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.url;
      });
  }

  navigateTo(page: string): void {
    this.router.navigateByUrl(page);
  }
}
