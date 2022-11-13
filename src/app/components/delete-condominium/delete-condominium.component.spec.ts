import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCondominiumComponent } from './delete-condominium.component';

describe('DeleteCondominiumComponent', () => {
  let component: DeleteCondominiumComponent;
  let fixture: ComponentFixture<DeleteCondominiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCondominiumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCondominiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
