import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVisualComponent } from './main-visual.component';

describe('MainVisualComponent', () => {
  let component: MainVisualComponent;
  let fixture: ComponentFixture<MainVisualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainVisualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
