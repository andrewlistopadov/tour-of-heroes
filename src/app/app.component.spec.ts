import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Hero } from './hero';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';

fdescribe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        AppRoutingModule
      ],
      declarations: [
        AppComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }, { provide: HeroService, useValue: {} }, { provide: MessageService, useValue: { messages: ['test message'] } }]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  });
  it('should create the app', async(() => {
    expect(appComponent).toBeTruthy();
  }));
  it(`should have as title 'Tour of Heroes'`, async(() => {
    expect(appComponent.title).toEqual('Tour of Heroes');
  }));
  it(`should render 'dashboard' and 'heroes' links`, async(() => {
    fixture.detectChanges();
    expect(compiled.querySelectorAll('nav>a')[0].getAttribute('href')).toBe('/dashboard');
    expect(compiled.querySelectorAll('nav>a')[1].getAttribute('href')).toBe('/heroes');
  }));
  it(`should render message component with 'test message'`, async(() => {
    fixture.detectChanges();
    expect(compiled.querySelector('app-messages').textContent).toContain('test message');
  }));
});
