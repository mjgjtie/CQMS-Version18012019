import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileUploadModule} from 'ng2-file-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { ImportTailorDocumentsComponent } from "./importTailorDocument.component";
import { FormsModule } from '@angular/forms'; 

// Buttons Routing
import { ImportTailorDocumentsRoutingModule } from './importTailorDocument-routing.module';

// Angular

@NgModule({
  imports: [
    CommonModule,
    ImportTailorDocumentsRoutingModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule
  ],
  declarations: [
    ImportTailorDocumentsComponent,
    
  ]
})
export class ImportTailorDocumentsModule { }


