import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CstFormComponent } from './cst-form.component';

describe('CstFormComponent', () => {
  let component: CstFormComponent;
  let fixture: ComponentFixture<CstFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CstFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CstFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
