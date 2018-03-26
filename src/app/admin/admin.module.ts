import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {AdminComponent} from './admin.component';
import {LoginComponent} from './login/login.component';
import {OptionsComponent} from './options/options.component';

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    OptionsComponent
  ],
  imports: [
    FormsModule,
    AppRoutingModule
  ]
})
export class AdminModule {

}
