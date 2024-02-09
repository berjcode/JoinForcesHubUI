import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateteamComponent } from './createteam.component';

describe('CreateteamComponent', () => {
  let component: CreateteamComponent;
  let fixture: ComponentFixture<CreateteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateteamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
