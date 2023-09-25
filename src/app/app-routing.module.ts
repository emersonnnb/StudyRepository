import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosListComponent } from './pages/produtos-list/produtos-list.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PessoasListComponent } from './pages/pessoas-list/pessoas-list.component';

const routes: Routes = [
  { path: "", component: MenuComponent },
  { path: "produtos", component: ProdutosListComponent },
  { path: "pessoas", component: PessoasListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
