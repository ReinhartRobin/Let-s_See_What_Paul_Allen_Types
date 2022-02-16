import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaulAllenComponent } from './paul-allen.component';

describe('PaulAllenComponent', () => {
  let component: PaulAllenComponent;
  let fixture: ComponentFixture<PaulAllenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaulAllenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaulAllenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
