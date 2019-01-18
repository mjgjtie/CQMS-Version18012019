import {Component, OnDestroy} from '@angular/core';
import { navItemsQualityAssurance} from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout-qualityAssurance.component.html'
})
export class DefaultLayoutQualityAssuranceComponent implements OnDestroy {
  public navItems = navItemsQualityAssurance;
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
