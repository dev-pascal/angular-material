import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { UnauthGuard } from './guards/unauth.guard';
import { AUTH_ROUTE } from 'src/app/routes/routes';

const routes: Routes = [
    {
        path: AUTH_ROUTE,
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