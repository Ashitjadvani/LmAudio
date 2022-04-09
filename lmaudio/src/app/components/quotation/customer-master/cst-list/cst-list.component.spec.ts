import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CstListComponent } from './cst-list.component';

describe('CstListComponent', () => {
  let component: CstListComponent;
  let fixture: ComponentFixture<CstListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CstListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CstListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
