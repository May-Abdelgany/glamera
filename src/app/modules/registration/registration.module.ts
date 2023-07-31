import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { BusinessInformationPageComponent } from './components/business-information-page/business-information-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerificationCodeComponent } from './components/verification-code/verification-code.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { SuccessComponent } from './components/success/success.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    RegistrationPageComponent,
    BusinessInformationPageComponent,
    VerificationCodeComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    LottieModule.forRoot({ player: playerFactory }),
    FormsModule,
    RegistrationRoutingModule
  ]
})


export class RegistrationModule { }
