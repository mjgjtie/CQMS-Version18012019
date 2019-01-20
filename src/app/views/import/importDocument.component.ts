import { Component } from '@angular/core';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogSuccessComponent} from '../dialog/dialogSuccess.component'


@Component({
  templateUrl: 'importDocument.component.html',
  styleUrls: ['./../../../scss/importFile.css']
})
export class ImportDocumentsComponent {
  // uploader: FileUploader = new FileUploader({});
  public uploader:FileUploader = new FileUploader({url:'http://localhost:4200/#/qualityAssurance/importDocuments/importDocument'});
  attachmentList: any = [];
  constructor() {
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.attachmentList.push(JSON.parse(response));
    }
  }
}
