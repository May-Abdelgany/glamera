import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Routing } from 'src/app/Routes/app-routes';
import { RegistrationRoutes } from '../../Routes/registeration-routes';

@Component({
  selector: 'app-business-information-page',
  templateUrl: './business-information-page.component.html',
  styleUrls: ['./business-information-page.component.scss']
})
export class BusinessInformationPageComponent {
  cities = [
    {
      name: 'cairo'
    },
    {
      name: 'giza'
    },
    {
      name: 'aswan'
    }
  ]
  district = [
    {
      name: 'zawia'
    },
    {
      name: 'zamalik'
    },
    {
      name: 'naser city'
    }
  ]
  ways = [
    {
      name: 'way1'
    },
    {
      name: 'way2'
    },
    {
      name: 'way3'
    }
  ]
  form!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    let exist = localStorage.getItem('secoundStep')
    if (exist) {
      this.router.navigate([`${Routing.registration.module}/${RegistrationRoutes.verify}`]);
    }
    this.generateForm()
  }

  generateForm() {
    this.form = this.fb.group(
      {
        BType: ['', [Validators.required, Validators.pattern(/^[a-zA-Z][a-zA-Z ]+$/)]],
        Salon: [false],
        Gym: [false],
        Spa: [false],
        Clinic: [false],
        cities: ['', [Validators.required]],
        District: ['', [Validators.required]],
        ways: ['', [Validators.required]],
        accept: 'yes',
      }
    );
  }
  get formControls(): any {
    return this.form.controls;
  }
  submit(data: FormGroup) {
    if (data.invalid) return
    // this._FlagService.secoundStep.next(true)
    localStorage.setItem('secoundStep', JSON.stringify(data.value))

    this.router.navigate([`${Routing.registration.module}/${RegistrationRoutes.verify}`])
  }
}
