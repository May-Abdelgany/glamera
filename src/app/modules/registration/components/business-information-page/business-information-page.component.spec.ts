import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessInformationPageComponent } from './business-information-page.component';

describe('BusinessInformationPageComponent', () => {
  let component: BusinessInformationPageComponent;
  let fixture: ComponentFixture<BusinessInformationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessInformationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
