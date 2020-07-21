import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBootComponent } from './login-boot.component';

describe('LoginBootComponent', () => {
  let component: LoginBootComponent;
  let fixture: ComponentFixture<LoginBootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginBootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
