import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FlagService {
  constructor(private http: HttpClient) { }
  // firstStep = new BehaviorSubject<boolean>(false);
  // secoundStep = new BehaviorSubject<boolean>(false);
  // thirdStep = new BehaviorSubject<boolean>(false);

  // getCountries(): Observable<any[]> {
  //   return this.http.get<any[]>(`https://restcountries.com/v3.1/all`);
  // }
}
