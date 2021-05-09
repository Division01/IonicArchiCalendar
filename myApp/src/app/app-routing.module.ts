import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SemaineComponent } from './semaine/semaine.component';
import { SemaineAddComponent } from './semaine-add/semaine-add.component';
import { SemaineEditComponent } from './semaine-edit/semaine-edit.component';
import { TacheAddComponent } from './tache-add/tache-add.component';
import { TacheEditComponent } from './tache-edit/tache-edit.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'semaines',
    component: SemaineComponent
  },
  {
    path:'semaines/add',
    component: SemaineAddComponent
  },
  {
    path:'semaines/edit/:id',
    component: SemaineEditComponent
  },
  {
    path:'semaines/add_task/:id',
    component: TacheAddComponent
  },  
  {
    path:'semaines/edit_task/:id',
    component: TacheEditComponent
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
