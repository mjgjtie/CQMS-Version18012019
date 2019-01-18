import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileUploadModule} from 'ng2-file-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { ImportAccountsComponent } from './importAccount.component';
import { FormsModule } from '@angular/forms'; 

// Buttons Routing
import { ImportAccountsRoutingModule } from './importAccount-routing.module';

// Angular

@NgModule({
  imports: [
    CommonModule,
    ImportAccountsRoutingModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule
  ],
  declarations: [
    ImportAccountsComponent,
    
  ]
})
export class ImportAccountsModule { }


