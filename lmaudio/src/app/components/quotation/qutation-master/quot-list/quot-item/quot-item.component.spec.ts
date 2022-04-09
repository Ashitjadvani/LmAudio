import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotItemComponent } from './quot-item.component';

describe('QuotItemComponent', () => {
  let component: QuotItemComponent;
  let fixture: ComponentFixture<QuotItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
