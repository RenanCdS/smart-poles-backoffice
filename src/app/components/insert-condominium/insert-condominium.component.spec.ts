import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCondominiumComponent } from './insert-condominium.component';

describe('InsertCondominiumComponent', () => {
  let component: InsertCondominiumComponent;
  let fixture: ComponentFixture<InsertCondominiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertCondominiumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertCondominiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
