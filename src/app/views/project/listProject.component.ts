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
    $("#add-button").on("click", function() {

      var projectDiv = document.createElement("li");
      var projectSpan1 = document.createElement("span");
      var projectSpan2 = document.createElement("span");
      var contentDiv = document.createElement("div");
      var contentSpan = document.createElement("span");
      var contentSpan1 = document.createElement("span");
      var contentSpan2= document.createElement("span");
      var contentSpan3 = document.createElement("span");
      var contentSpan4 = document.createElement("span");
      var contentSpan5 = document.createElement("span");
      var contentSpan6 = document.createElement("span");
  
      var projectDivAtt = document.createAttribute("class");
      var projectSpanAtt1 = document.createAttribute("class");
      var projectSpanAtt2 = document.createAttribute("class");
      var contentDivAtt = document.createAttribute("class");
      var contentSpanAtt = document.createAttribute("class");
      var contentSpan1Att = document.createAttribute("class");
      var contentSpan2Att = document.createAttribute("class");
      var contentSpan3Att = document.createAttribute("class");
      var contentSpan4Att = document.createAttribute("class");
      var contentSpan5Att = document.createAttribute("class");
      var contentSpan6Att = document.createAttribute("class");
  
      var projectDivAttVal = projectDivAtt.value = "survey-item";
      var projectSpanAtt1Val = projectSpanAtt1.value = "survey-name";
      var projectSpanAtt2Val = projectSpanAtt2.value = "survey-country grid-only";
      var contentDivAttVal = contentDivAtt.value = "pull-right";
      var contentSpanAttVal = contentSpanAtt.value = "survey-progress";
      var contentSpan1AttVal = contentSpan1Att.value = "survey-progress-bg";
      var contentSpan2AttVal = contentSpan2Att.value = "survey-progress-fg";
      var contentSpan3AttVal = contentSpan3Att.value = "survey-progress-labels";
      var contentSpan4AttVal = contentSpan4Att.value = "survey-progress-label";
      var contentSpan5AttVal = contentSpan5Att.value = "survey-completes";
      var contentSpan6AttVal = contentSpan6Att.value = "survey-end-date";
  
      projectDiv.setAttributeNode(projectDivAtt);
      projectSpan1.setAttributeNode(projectSpanAtt1);
      projectSpan2.setAttributeNode(projectSpanAtt2);
      contentDiv.setAttributeNode(contentDivAtt);
      contentSpan.setAttributeNode(contentSpanAtt);
      contentSpan1.setAttributeNode(contentSpan1Att);
      contentSpan2.setAttributeNode(contentSpan2Att);
      contentSpan3.setAttributeNode(contentSpan3Att);
      contentSpan4.setAttributeNode(contentSpan4Att);
      contentSpan5.setAttributeNode(contentSpan5Att);
      contentSpan6.setAttributeNode(contentSpan6Att);
  
      var projectText = document.createTextNode($("#project").val());
      var spanText = document.createTextNode("US");
      var contentspanText = document.createTextNode("88%");
      var contentspan1Text = document.createTextNode("490 / 500");
      var contentspan2Text = document.createTextNode("  2014 - May 10");
      

      projectSpan1.appendChild(projectText);
      projectSpan2.appendChild(spanText);

      projectDiv.appendChild(projectSpan1);
      projectDiv.appendChild(projectSpan2);
      projectDiv.appendChild(contentDiv);

      contentSpan6.appendChild(contentspan2Text);
      contentDiv.appendChild(contentSpan);
      contentDiv.appendChild(contentSpan6);
      
      contentSpan.appendChild(contentSpan1);
      contentSpan.appendChild(contentSpan3);

      contentSpan4.appendChild(contentspanText);
      contentSpan5.appendChild(contentspan1Text);
      contentSpan3.appendChild(contentSpan4);
      contentSpan3.appendChild(contentSpan5);

      contentSpan1.appendChild(contentSpan2);

      $('.backlog').append(projectDiv);
    });
    
  }

  // openModal() {
  //     this.modalService.open();
  // }

  // closeModal(id: string) {
  //     this.modalService.close(id);
  // }
}
