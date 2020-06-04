import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrarAnimalComponent } from './registrar-animal/registrar-animal.component';

const routes = [
  {
    path: 'item',
    component: RegistrarAnimalComponent
  },
  {
    path: 'home',
    component: AppComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrarAnimalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled'
    })
  ],
  providers: [],
  bootstrap: [AppComponent, RegistrarAnimalComponent]
})

export class AppModule { }