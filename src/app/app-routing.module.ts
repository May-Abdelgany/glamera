import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Routing } from 'src/app/Routes/app-routes';

const routes: Routes = [
  { path: '', redirectTo: Routing.registration.module, pathMatch: 'full' },
  {
    path: Routing.registration.module,
    loadChildren: () => import('./modules/registration/registration.module').then((m) => m.RegistrationModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
