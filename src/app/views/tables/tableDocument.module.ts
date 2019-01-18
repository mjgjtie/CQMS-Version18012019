import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileUploadModule} from 'ng2-file-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { TableDocumentComponent } from './tableDocument.component';
import { FormsModule } from '@angular/forms'; 

// Buttons Routing
import { TableDocumentsRoutingModule } from './tableDocument-routing.module';

// Angular

@NgModule({
  imports: [
    CommonModule,
    TableDocumentsRoutingModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule
  ],
  declarations: [
    TableDocumentComponent,
    
  ]
})
export class TableDocumentsModule { }


