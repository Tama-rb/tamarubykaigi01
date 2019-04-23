import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeynotesComponent } from './keynotes.component';

describe('KeynotesComponent', () => {
  let component: KeynotesComponent;
  let fixture: ComponentFixture<KeynotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeynotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeynotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
