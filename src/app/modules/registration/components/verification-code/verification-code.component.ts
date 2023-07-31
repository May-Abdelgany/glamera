import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Routing } from 'src/app/Routes/app-routes';
import { RegistrationRoutes } from '../../Routes/registeration-routes';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.scss']
})
export class VerificationCodeComponent {
  // options: any = {
  //   path: 'assets/animations/animation_lko1ubkq.json',
  //   loop: true,
  //   autoplay: true,
  // };

  // onAnimationCreated(animationItem: AnimationItem): void {
  //   animationItem.setSpeed(0.5);
  // }

  constructor(private router: Router) {
    let exist = localStorage.getItem('thirdStep')
    if (exist) {
      this.router.navigate([`${Routing.registration.module}/${RegistrationRoutes.success}`]);
    }
  }
  otpValue: string = '';
  notvalid = false
  clicked = false
  onOtpChange(value: string) {
    this.otpValue = value;
    if (this.otpValue.length != 4) {
      this.notvalid = false
    }
    else {
      this.notvalid = true

    }
  }

  submitOtp() {
    this.clicked = true
    if (this.otpValue.length != 4) return
    // this._FlagService.thirdStep.next(true)
    localStorage.setItem('thirdStep', 'true')

    this.router.navigate([`${Routing.registration.module}/${RegistrationRoutes.success}`])
  }


}
