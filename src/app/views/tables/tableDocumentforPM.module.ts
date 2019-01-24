import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileUploadModule} from 'ng2-file-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'angular-custom-modal';
import { HttpClientModule } from '@angular/common/http';
import { TableDocumentForPMComponent } from './tableDocumentforPM.component';
import { FormsModule } from '@angular/forms'; 

// Buttons Routing
import { TableDocumentsForPMRoutingModule } from './tableDocumentforPM-routing.module';

// Angular

@NgModule({
  imports: [
    CommonModule,
    TableDocumentsForPMRoutingModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule,
    ModalModule
  ],
  declarations: [
    TableDocumentForPMComponent,
    
  ]
})
export class TableDocumentsForPMModule { }


