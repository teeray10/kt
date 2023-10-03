import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from 'src/app/app.component';

const routes: Routes = [
  {path: 'bible', loadChildren: () => import('./bible/bible.module').then(m => m.BibleModule)},
  {path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
