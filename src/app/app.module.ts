import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ModalModule} from 'angular-custom-modal';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutAdminComponent,
  DefaultLayoutStaffComponent,
  DefaultLayoutQualityAssuranceComponent,
  DefaultLayoutQualityAssuranceManagerComponent,
  DefaultLayoutProjectManagerComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DefaultLayoutAdminComponent } from './containers/default-layout-admin';
import { DefaultLayoutStaffComponent } from './containers/default-layout-staff';
import { DefaultLayoutQualityAssuranceComponent } from './containers/default-layout-qualityassurance';
import { DefaultLayoutQualityAssuranceManagerComponent } from './containers/default-layout-qualityassurancemanager';
import { DefaultLayoutProjectManagerComponent } from './containers/default-layout-projectmanager'

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ModalModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent
    
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
