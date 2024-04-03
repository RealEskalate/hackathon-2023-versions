import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hackathon2023Component } from './hackathon2023.component';

describe('Hackathon2023Component', () => {
  let component: Hackathon2023Component;
  let fixture: ComponentFixture<Hackathon2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hackathon2023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hackathon2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
