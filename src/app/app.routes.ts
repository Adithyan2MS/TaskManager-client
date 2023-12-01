import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { authGuard } from './AuthGuard/auth.guard';

export const routes: Routes = [
    {
        path:"dashboard",
        component:DashboardComponent,
        title:"Your Dashboard",
        canActivate:[authGuard]
    },
    {
        path:"login",
        component:LoginComponent,
        title:"Login to Task Manager"
    },
    {
        path:"register",
        component:RegisterComponent,
        title:"Register to Task Manager"
    }

];
