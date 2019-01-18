import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileUploadModule} from 'ng2-file-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { ImportDocumentsComponent } from './importDocument.component';
import { FormsModule } from '@angular/forms'; 

// Buttons Routing
import { ImportDocumentsRoutingModule } from './importDocument-routing.module';

// Angular

@NgModule({
  imports: [
    CommonModule,
    ImportDocumentsRoutingModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule
  ],
  declarations: [
    ImportDocumentsComponent,
    
  ]
})
export class ImportDocumentsModule { }


