import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsihetMjarrebComponent } from './nsihet-mjarreb.component';

describe('NsihetMjarrebComponent', () => {
  let component: NsihetMjarrebComponent;
  let fixture: ComponentFixture<NsihetMjarrebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NsihetMjarrebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NsihetMjarrebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
