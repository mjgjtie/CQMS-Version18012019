import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageProjectComponent } from './manageProject.component';
import { Title } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Home'
    }
    ,
    children: [
      {
        path: '',
        redirectTo: 'manageProject'
      },
      {
        path: 'manageProject',
        component: ManageProjectComponent,
        data: {
          title: 'Project'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageProjectRoutingModule {}
