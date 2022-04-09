import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CstDetailsComponent } from './cst-details.component';

describe('CstDetailsComponent', () => {
  let component: CstDetailsComponent;
  let fixture: ComponentFixture<CstDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CstDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CstDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
