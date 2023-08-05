import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftMenuModule } from './left-menu/left-menu.module';
import { MainContainerComponent } from './main-container/main-container.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { UserDetailsPopupComponent } from './shared-component/user-details-popup/user-details-popup.component';
import { MainContainerModule } from './main-container/main-container.module';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeftMenuModule,
    UserDetailsPopupComponent,
    MainContainerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
