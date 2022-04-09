import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotDetailsComponent } from './quot-details.component';

describe('QuotDetailsComponent', () => {
  let component: QuotDetailsComponent;
  let fixture: ComponentFixture<QuotDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
