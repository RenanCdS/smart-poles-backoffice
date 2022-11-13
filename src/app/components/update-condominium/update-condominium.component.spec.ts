import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCondominiumComponent } from './update-condominium.component';

describe('UpdateCondominiumComponent', () => {
  let component: UpdateCondominiumComponent;
  let fixture: ComponentFixture<UpdateCondominiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCondominiumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCondominiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
