import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInsumosConsumiblesComponent } from './create-insumos-consumibles.component';

describe('CreateInsumosConsumiblesComponent', () => {
  let component: CreateInsumosConsumiblesComponent;
  let fixture: ComponentFixture<CreateInsumosConsumiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateInsumosConsumiblesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateInsumosConsumiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
