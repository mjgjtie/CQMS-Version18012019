import { Component } from '@angular/core';
import { ModalModule } from 'angular-custom-modal';
import * as $ from 'jquery';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'mytableDocument.component.html',
  styleUrls: ['./../../../scss/listProject.css']
})
export class MyTableDocumentComponent {
  private bodyText: string;

  constructor() {
  }

  ngOnInit() {
    $(function () {
      $('#datetimepicker1').datetimepicker();
    });
  }

  // openModal() {
  //     this.modalService.open();
  // }

  // closeModal(id: string) {
  //     this.modalService.close(id);
  // }
}
