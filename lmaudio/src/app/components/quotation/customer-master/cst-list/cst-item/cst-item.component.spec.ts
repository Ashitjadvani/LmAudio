import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CstItemComponent } from './cst-item.component';

describe('CstItemComponent', () => {
  let component: CstItemComponent;
  let fixture: ComponentFixture<CstItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CstItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CstItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
