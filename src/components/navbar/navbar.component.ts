import { Component } from '@angular/core';

import { Store } from '../store/store'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(
    private store: Store
  ) { }

  items = this.store.getItems();

}
