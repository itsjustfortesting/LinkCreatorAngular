import {NgModule} from '@angular/core';
import {MenuComponent} from './menu/menu.component';
import {HeaderComponent} from './header/header.component';
import {CommonModule} from '@angular/common';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent
  ]
})
export class CoreModule { }
