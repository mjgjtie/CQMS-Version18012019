import { Component } from '@angular/core';
import { ModalService } from '../../_services';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'listProject.component.html',
  styleUrls: ['./../../../scss/listProject.css']
})
export class ListProjectComponent {
  private bodyText: string;

  constructor() {
    
  }

  ngOnInit() {
    $(".data-toggle").on("click", function() {
      $(this).addClass('active').attr('data-toggle')
    $(this).siblings('[data-toggle]').removeClass('active')
    $('.surveys').removeClass('grid list').addClass()
    });
    
  }

  // openModal() {
  //     this.modalService.open();
  // }

  // closeModal(id: string) {
  //     this.modalService.close(id);
  // }
}
