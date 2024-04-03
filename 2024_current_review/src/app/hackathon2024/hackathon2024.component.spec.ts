import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hackathon2024Component } from './hackathon2024.component';

describe('Hackathon2024Component', () => {
  let component: Hackathon2024Component;
  let fixture: ComponentFixture<Hackathon2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hackathon2024Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hackathon2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
