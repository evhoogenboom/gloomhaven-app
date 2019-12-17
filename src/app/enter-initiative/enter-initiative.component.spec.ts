import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterInitiativeComponent } from './enter-initiative.component';

describe('EnterInitiativeComponent', () => {
  let component: EnterInitiativeComponent;
  let fixture: ComponentFixture<EnterInitiativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterInitiativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterInitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
