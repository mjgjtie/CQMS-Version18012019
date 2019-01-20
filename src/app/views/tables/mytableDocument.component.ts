import { Component } from '@angular/core';
import { ModalService } from '../../_services';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'mytableDocument.component.html'
})
export class MyTableDocumentComponent {
  private bodyText: string;

  constructor() {
  }

  // ngOnInit() {
  //     this.bodyText = 'This text can be updated in modal 1';
  // }

  // openModal() {
  //     this.modalService.open();
  // }

  // closeModal(id: string) {
  //     this.modalService.close(id);
  // }
}
