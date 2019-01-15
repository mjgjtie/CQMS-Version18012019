import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DocumentComponent } from './document_.component';
import { DocumentRoutingModule } from './document-routing.module';

@NgModule({
  imports: [
    DocumentRoutingModule,
    ChartsModule
  ],
  declarations: [ DocumentComponent ]
})
export class DocumentModule { }
