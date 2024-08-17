import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEquipoMenorComponent } from './create-equipo-menor.component';

describe('CreateEquipoMenorComponent', () => {
  let component: CreateEquipoMenorComponent;
  let fixture: ComponentFixture<CreateEquipoMenorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEquipoMenorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEquipoMenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
