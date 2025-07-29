import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/reset-password/reset-password.component.spec.ts
import { ResetPasswordComponent } from './reset-password.component';

describe('ResetPasswordComponent', () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResetPasswordComponent);
========
import { Age1113Component } from './age1113.component';

describe('Age1113Component', () => {
  let component: Age1113Component;
  let fixture: ComponentFixture<Age1113Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Age1113Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Age1113Component);
>>>>>>>> origin/develop:src/app/pages/ages/age1113/age1113.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
