import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeASpeakerComponent } from './become-a-speaker.component';

describe('BecomeASpeakerComponent', () => {
  let component: BecomeASpeakerComponent;
  let fixture: ComponentFixture<BecomeASpeakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeASpeakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeASpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
