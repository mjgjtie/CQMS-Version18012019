import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportAccountsComponent } from './importAccount.component';
import { Title } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Import Accounts'
    },
    children: [
      {
        path: '',
        redirectTo: 'importAccount'
      },
      {
        path: 'importAccount',
        component: ImportAccountsComponent,
        data: {
          title: 'Import List'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportAccountsRoutingModule {}
