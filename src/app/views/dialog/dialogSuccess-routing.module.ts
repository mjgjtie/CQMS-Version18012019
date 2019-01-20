import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DialogSuccessComponent } from './dialogSuccess.component';

const routes: Routes = [
  {
    path: '',
    component: DialogSuccessComponent,
    data: {
      title: 'View Document'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DialogSuccessRoutingModule {}
