import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeTimeLineComponent } from './crime-time-line.component';

describe('CrimeTimeLineComponent', () => {
  let component: CrimeTimeLineComponent;
  let fixture: ComponentFixture<CrimeTimeLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrimeTimeLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimeTimeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
