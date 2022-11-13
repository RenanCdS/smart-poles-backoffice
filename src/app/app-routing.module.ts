import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCondominiumsPageComponent } from './pages/list-condominiums-page/list-condominiums-page.component';

const routes: Routes = [
  {
    path: 'condominios',
    component: ListCondominiumsPageComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/condominios',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/condominios',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
