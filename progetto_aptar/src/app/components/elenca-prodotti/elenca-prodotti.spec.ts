import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencaProdotti } from './elenca-prodotti';

describe('ElencaProdotti', () => {
  let component: ElencaProdotti;
  let fixture: ComponentFixture<ElencaProdotti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElencaProdotti]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElencaProdotti);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
