import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DialogSuccessComponent } from './dialogSuccess.component';
import { DialogSuccessRoutingModule } from './dialogSuccess-routing.module';

@NgModule({
  imports: [
    DialogSuccessRoutingModule,
    ChartsModule
  ],
  declarations: [ DialogSuccessComponent ]
})
export class DialogSuccessModule { }
