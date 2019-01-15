import {Component, OnDestroy} from '@angular/core';
import { navItemsAdmin } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout-admin.component.html'
})
export class DefaultLayoutAdminComponent implements OnDestroy {
  public navItems = navItemsAdmin;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  constructor() {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: [ 'class' ]
    });
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
}
