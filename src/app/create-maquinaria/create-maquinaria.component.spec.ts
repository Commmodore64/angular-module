import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMaquinariaComponent } from './create-maquinaria.component';

describe('CreateMaquinariaComponent', () => {
  let component: CreateMaquinariaComponent;
  let fixture: ComponentFixture<CreateMaquinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMaquinariaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMaquinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
