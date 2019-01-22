import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileUploadModule} from 'ng2-file-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ModalModule} from 'angular-custom-modal';
import { HttpClientModule } from '@angular/common/http';
import { ListProjectComponent } from './listProject.component';
import { FormsModule } from '@angular/forms'; 

// Buttons Routing
import { ListProjectRoutingModule } from './listProject-routing.module';

// Angular

@NgModule({
  imports: [
    CommonModule,
    ListProjectRoutingModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule,
    ModalModule
  ],
  declarations: [
    ListProjectComponent,
    
  ]
})
export class ListProjectModule { }


