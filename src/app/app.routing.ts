import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultLayoutAdminComponent } from "./containers/default-layout-admin";
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { DefaultLayoutStaffComponent } from './containers/default-layout-staff';
import { DefaultLayoutQualityAssuranceComponent } from './containers/default-layout-qualityassurance';
import { DefaultLayoutQualityAssuranceManagerComponent } from './containers/default-layout-qualityassurancemanager';
import { DefaultLayoutProjectManagerComponent } from './containers/default-layout-projectmanager'
import { ViewDocumentComponent } from './views/display/viewandcomment.component';




export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'qualityAssurance',
    component: DefaultLayoutQualityAssuranceComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: "",
        loadChildren: './views/document/document.module#DocumentModule'
      },
      {
        path: 'document',
        loadChildren: './views/document/document.module#DocumentModule'
      },
      {
        path: 'view',
        loadChildren: './views/display/viewandcomment.module#ViewDocumentModule'
      },
      {
        path: 'myDocument',
        loadChildren: './views/tables/mytableDocument.module#MyTableDocumentsModule'
      },
      {
        path: 'manage',
        loadChildren: './views/tables/tableDocumentforQA.module#TableDocumentsForQAModule'
      },
      {
        path: 'importDocuments',
        loadChildren: './views/import/importDocument.module#ImportDocumentsModule'
      }
    ]
  },
  {
    path: 'qualityAssuranceManager',
    component: DefaultLayoutQualityAssuranceManagerComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: "",
        loadChildren: './views/document/document.module#DocumentModule'
      },
      {
        path: 'document',
        loadChildren: './views/document/document.module#DocumentModule'
      },
      {
        path: 'view',
        loadChildren: './views/display/viewandcomment.module#ViewDocumentModule'
      },
      {
        path: 'manage',
        loadChildren: './views/tables/tableDocument.module#TableDocumentsModule'
      },
      {
        path: 'importDocuments',
        loadChildren: './views/import/importDocument.module#ImportDocumentsModule'
      }
    ]
  },
  {
    path: 'staff',
    component: DefaultLayoutStaffComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'document',
        loadChildren: './views/document/document.module#DocumentModule'
      },
      {
        path: 'view',
        loadChildren: './views/display/viewandcomment.module#ViewDocumentModule'
      }
    ]
  },
  {
    path: 'projectManager',
    component: DefaultLayoutProjectManagerComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        loadChildren: './views/project/listProject.module#ListProjectModule'
      },
      {
        path: 'document',
        loadChildren: './views/document/document.module#DocumentModule'
      },
      {
        path: 'manageProject',
        loadChildren: './views/project/manageProject.module#ManageProjectModule'
      },
      {
        path: 'listProject',
        loadChildren: './views/project/listProject.module#ListProjectModule'
      },
      {
        path: 'importDocuments',
        loadChildren: './views/project/importTailorDocument.module#ImportTailorDocumentsModule'
      },
      {
        path: 'manage',
        loadChildren: './views/tables/tableDocumentforPM.module#TableDocumentsForPMModule'
      },
      {
        path: 'view',
        loadChildren: './views/display/viewandcomment.module#ViewDocumentModule'
      }
    ]
  },
  {
    path: '',
    component: DefaultLayoutAdminComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'manage',
        loadChildren: './views/base/base.module#BaseModule'
      },
      {
        path: 'adduser',
        loadChildren: './views/buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'importListAccounts',
        loadChildren: './views/account/importAccount.module#ImportAccountsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'theme',
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
