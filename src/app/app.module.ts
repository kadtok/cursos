import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { CamelCasePipe } from './camel-case.pipe';

const appRouters: Routes = [
  { path: 'cursos', component: CursosComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursosComponent,
    LoginComponent,
    FormTemplateDrivenComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
