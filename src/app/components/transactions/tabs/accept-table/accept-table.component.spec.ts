import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptTableComponent } from './accept-table.component';

describe('AcceptTableComponent', () => {
  let component: AcceptTableComponent;
  let fixture: ComponentFixture<AcceptTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
