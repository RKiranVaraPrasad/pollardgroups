import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPotentialComponent } from './market-potential.component';

describe('MarketPotentialComponent', () => {
  let component: MarketPotentialComponent;
  let fixture: ComponentFixture<MarketPotentialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketPotentialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketPotentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
