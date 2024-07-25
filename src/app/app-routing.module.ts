import { NgModule } from '@angular/core';
import {Routes,RouterModule,Router} from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

const routes:Routes=[
  {
    path:'chat',
    component:AppComponent
  },
  {
    path:'account',
    component:UserComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
