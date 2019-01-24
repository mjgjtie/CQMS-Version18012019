import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileUploadModule} from 'ng2-file-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'angular-custom-modal';
import { HttpClientModule } from '@angular/common/http';
import { TableDocumentForQAComponent } from './tableDocumentforQA.component';
import { FormsModule } from '@angular/forms'; 

// Buttons Routing
import { TableDocumentsForQARoutingModule } from './tableDocumentforQA-routing.module';

// Angular

@NgModule({
  imports: [
    CommonModule,
    TableDocumentsForQARoutingModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule,
    ModalModule
  ],
  declarations: [
    TableDocumentForQAComponent,
    
  ]
})
export class TableDocumentsForQAModule { }


