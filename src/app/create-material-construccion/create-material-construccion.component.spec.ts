import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMaterialConstruccionComponent } from './create-material-construccion.component';

describe('CreateMaterialConstruccionComponent', () => {
  let component: CreateMaterialConstruccionComponent;
  let fixture: ComponentFixture<CreateMaterialConstruccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMaterialConstruccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMaterialConstruccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
