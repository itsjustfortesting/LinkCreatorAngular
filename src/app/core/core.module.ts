import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {CommonModule} from '@angular/common';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class CoreModule { }
