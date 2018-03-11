import {NgModule} from '@angular/core';
import {MenuComponent} from './menu/menu.component';
import {HeaderComponent} from './header/header.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent
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
