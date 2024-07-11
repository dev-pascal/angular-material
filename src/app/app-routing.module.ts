import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_PATH, AUTH_PATH } from './paths/paths';

const routes: Routes = [
  {
    path: APP_PATH,
    pathMatch: 'full',
    redirectTo: AUTH_PATH,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
