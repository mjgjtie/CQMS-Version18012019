import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportTailorDocumentsComponent } from "./importTailorDocument.component";
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
        component: ImportTailorDocumentsComponent,
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
export class ImportTailorDocumentsRoutingModule {}
