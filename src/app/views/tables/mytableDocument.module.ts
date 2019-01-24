import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileUploadModule} from 'ng2-file-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ModalModule} from 'angular-custom-modal';
import { HttpClientModule } from '@angular/common/http';
import { MyTableDocumentComponent } from './mytableDocument.component';
import { FormsModule } from '@angular/forms'; 
import * as $ from 'jquery';

// Buttons Routing
import { MyTableDocumentsRoutingModule } from './mytableDocument-routing.module';

// Angular

@NgModule({
  imports: [
    CommonModule,
    MyTableDocumentsRoutingModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule,
    ModalModule
  ],
  declarations: [
    MyTableDocumentComponent,
    
  ]
})
export class MyTableDocumentsModule { }


