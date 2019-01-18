import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyTableDocumentComponent } from './mytableDocument.component';
import { Title } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Manage Documents'
    }
    ,
    children: [
      {
        path: '',
        redirectTo: 'manage'
      },
      {
        path: 'manage',
        component: MyTableDocumentComponent,
        data: {
          title: 'Manage Document'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTableDocumentsRoutingModule {}
