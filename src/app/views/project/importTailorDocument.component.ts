import { Component } from '@angular/core';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogSuccessComponent} from '../dialog/dialogSuccess.component'


@Component({
  templateUrl: 'importTailorDocument.component.html',
  styleUrls: ['./../../../scss/importFile.css']
})
export class ImportTailorDocumentsComponent {
  // uploader: FileUploader = new FileUploader({});
  public uploader:FileUploader = new FileUploader({url:'http://localhost:4200/projectManager/importDocuments/importDocument'});
  attachmentList: any = [];
  constructor() {
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.attachmentList.push(JSON.parse(response));
    }
  }
}
