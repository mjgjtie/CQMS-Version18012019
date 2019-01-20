import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileUploadModule} from 'ng2-file-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { ManageProjectComponent } from './manageProject.component';
import { FormsModule } from '@angular/forms'; 

// Buttons Routing
import { ManageProjectRoutingModule } from './manageProject-routing.module';

// Angular

@NgModule({
  imports: [
    CommonModule,
    ManageProjectRoutingModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule
  ],
  declarations: [
    ManageProjectComponent,
    
  ]
})
export class ManageProjectModule { }


