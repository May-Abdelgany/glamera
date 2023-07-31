import { Component, OnInit } from '@angular/core';
import { Dropdown } from 'primeng/dropdown';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationRoutes } from '../../Routes/registeration-routes';
import { Routing } from 'src/app/Routes/app-routes';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  form!: FormGroup;
  allCountries: any[] = []
  selectedCountry: any;
  showPassword = false
  constructor(private fb: FormBuilder, private router: Router) {
    let exist = localStorage.getItem('firstStep')
    if (exist) {
      this.router.navigate([`${Routing.registration.module}/${RegistrationRoutes.busnissInfo}`]);
    }
    this.selectedCountry = {
      code: '+1684',
      flag: 'https://flagcdn.com/as.svg'
    }
    this.generateForm()
  }
  ngOnInit(): void {
    // this._FlagService.getCountries().subscribe((res) => {
    //   res.map((data: any) => {

    //     let object: any = {
    //       flag: data.flags.svg,
    //       code: data.idd.root + data.idd?.suffixes[0]
    //     }
    //     this.allCountries.push(object)
    //   })
    // })
    this.allCountries = [
      {
        code: '+966',
        flag: 'https://flagcdn.com/sa.svg'
      },
      {
        code: '+20',
        flag: 'https://flagcdn.com/eg.svg'
      }
    ]
    this.selectedCountry = this.allCountries[0]
  }

  changeType() {
    if (this.showPassword) {
      this.showPassword = false;
    } else {
      this.showPassword = true;
    }

  }


  generateForm() {
    this.form = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
        lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
        phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{11}$/)]],
        email: ['', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+)+\.[a-z]{2,5}$/)]],
        isChecked: false,
        password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*\-+_/)()]).{8,}$/)]],
      }
    );
  }
  get formControls(): any {
    return this.form.controls;
  }
  submit(data: FormGroup) {
    if (data.invalid) return
    // this._FlagService.firstStep.next(true)
    localStorage.setItem('firstStep', JSON.stringify(data.value))
    this.router.navigate([`${Routing.registration.module}/${RegistrationRoutes.busnissInfo}`])
  }
}
