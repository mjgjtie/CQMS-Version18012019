import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ViewDocumentComponent } from './viewandcomment.component';
import { ViewDocumentRoutingModule } from './viewandcomment-routing.module';

@NgModule({
  imports: [
    ViewDocumentRoutingModule,
    ChartsModule
  ],
  declarations: [ ViewDocumentComponent ]
})
export class ViewDocumentModule { }
