import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationRoutes } from './Routes/registeration-routes';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { VerificationCodeComponent } from './components/verification-code/verification-code.component';
import { SecondStepGuard } from './guards/second-step.guard';
import { BusinessInformationPageComponent } from './components/business-information-page/business-information-page.component';
import { ThirdStepGuard } from './guards/third-step.guard';
import { SuccessComponent } from './components/success/success.component';
import { FourthStepGuard } from './guards/fourth-step.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: RegistrationRoutes.registration,
    pathMatch: 'full',
  },
  {
    path: RegistrationRoutes.registration,
    component: RegistrationPageComponent,
  },
  {
    path: RegistrationRoutes.busnissInfo,
    canActivate: [SecondStepGuard],
    component: BusinessInformationPageComponent,
  },
  {
    path: RegistrationRoutes.verify,
    canActivate: [ThirdStepGuard],
    component: VerificationCodeComponent,
  },
  {
    path: RegistrationRoutes.success,
    canActivate: [FourthStepGuard],
    component: SuccessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
