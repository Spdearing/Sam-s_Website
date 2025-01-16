import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerInputAreaComponent } from './player-input-area.component';

describe('PlayerInputAreaComponent', () => {
  let component: PlayerInputAreaComponent;
  let fixture: ComponentFixture<PlayerInputAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerInputAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerInputAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
