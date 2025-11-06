import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioProdott } from './dettaglio-prodott';

describe('DettaglioProdott', () => {
  let component: DettaglioProdott;
  let fixture: ComponentFixture<DettaglioProdott>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettaglioProdott]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettaglioProdott);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
