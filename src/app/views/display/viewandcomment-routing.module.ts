import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewDocumentComponent } from './viewandcomment.component';

const routes: Routes = [
  {
    path: '',
    component: ViewDocumentComponent,
    data: {
      title: 'View Document'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDocumentRoutingModule {}
