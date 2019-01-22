import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileUploadModule} from 'ng2-file-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ModalModule} from 'angular-custom-modal';
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
    HttpClientModule,
    ModalModule
  ],
  declarations: [
    ManageProjectComponent,
    
  ]
})
export class ManageProjectModule { }


