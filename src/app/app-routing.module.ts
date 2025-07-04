import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import {ContactFormComponent} from './components/contact-form/contact-form.component';

const routes: Routes = [
   { path: '', redirectTo: '/contatos', pathMatch: 'full' },
  { path: 'contatos', component: ContactListComponent },
  {path:'contatos/novo', component: ContactFormComponent },
  { path: 'contatos/novo', component: ContactFormComponent },
   { path: 'contatos/editar/:id', component: ContactFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
