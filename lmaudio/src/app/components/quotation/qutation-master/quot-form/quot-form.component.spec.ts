import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotFormComponent } from './quot-form.component';

describe('QuotFormComponent', () => {
  let component: QuotFormComponent;
  let fixture: ComponentFixture<QuotFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
