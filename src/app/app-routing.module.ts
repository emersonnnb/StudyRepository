import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosListComponent } from './pages/produtos-list/produtos-list.component';

import { PessoasListComponent } from './pages/pessoas-list/pessoas-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { authGuard } from './auth.guard';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[authGuard], 
    children : [    
        {path:'produtos', component: ProdutosListComponent},
        {path:'pessoas', component: PessoasListComponent},
      ]
  },  
  {path: '**', redirectTo: '/login', pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
