import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  })

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Magic: The Gathering - Companion App'`, () => {
    expect(component.title).toEqual('Magic: The Gathering - Companion App');
  });

  it(`should have a nav component`, () => {
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelector('app-nav')).not.toBe(null);
  });

  it(`should have a router-outlet component`, () => {
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelector('router-outlet')).not.toBe(null);
  });

  it(`should have a footer component`, () => {
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelector('app-footer')).not.toBe(null);
  });

});
