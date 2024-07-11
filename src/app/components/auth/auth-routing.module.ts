import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { UnauthGuard } from './guards/unauth.guard';
import { AUTH_PATH } from 'src/app/paths/paths';

const routes: Routes = [
    {
        path: AUTH_PATH,
        component: AuthComponent,
        pathMatch: 'full',
        canActivate: [
            UnauthGuard],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }