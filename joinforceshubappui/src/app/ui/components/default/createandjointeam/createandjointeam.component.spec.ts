import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateandjointeamComponent } from './createandjointeam.component';

describe('CreateandjointeamComponent', () => {
  let component: CreateandjointeamComponent;
  let fixture: ComponentFixture<CreateandjointeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateandjointeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateandjointeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
