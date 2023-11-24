import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';

export const routes: Routes = [
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
