import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCondominiumsPageComponent } from './list-condominiums-page.component';

describe('ListCondominiumsPageComponent', () => {
  let component: ListCondominiumsPageComponent;
  let fixture: ComponentFixture<ListCondominiumsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCondominiumsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCondominiumsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
