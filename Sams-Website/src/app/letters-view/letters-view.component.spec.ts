import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersViewComponent } from './letters-view.component';

describe('LettersViewComponent', () => {
  let component: LettersViewComponent;
  let fixture: ComponentFixture<LettersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LettersViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LettersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
