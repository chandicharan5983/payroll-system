import { Injectable } from '@angular/core';
import { MENU_LIST } from '../constant/menu-list.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  menuList =  JSON.parse(JSON.stringify(MENU_LIST));
  constructor() { }


}
