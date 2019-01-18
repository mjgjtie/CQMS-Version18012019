import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportDocumentsComponent } from './importDocument.component';
import { Title } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Import Documents'
    }
    ,
    children: [
      {
        path: '',
        redirectTo: 'importDocument'
      },
      {
        path: 'importDocument',
        component: ImportDocumentsComponent,
        data: {
          title: 'Import Document'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportDocumentsRoutingModule {}
