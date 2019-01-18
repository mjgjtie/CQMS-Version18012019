import { Component } from '@angular/core';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';



@Component({
  templateUrl: 'importAccount.component.html',
  styleUrls: ['./../../../scss/importFile.css']
})
export class ImportAccountsComponent {
  // uploader: FileUploader = new FileUploader({});

  // attachmentList: any = [];
  // constructor(private http: HttpClient) {
  //   this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
  //     this.attachmentList.push(JSON.parse(response));
  //   }
  // }

  public uploader:FileUploader = new FileUploader({url:'http://localhost:4200/#/importListAccounts/importAccount'});

}
