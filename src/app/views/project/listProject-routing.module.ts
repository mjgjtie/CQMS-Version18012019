import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProjectComponent } from './listProject.component';
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
        redirectTo: 'listProject'
      },
      {
        path: 'listProject',
        component: ListProjectComponent,
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
export class ListProjectRoutingModule {}
