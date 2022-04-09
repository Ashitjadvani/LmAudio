import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotListComponent } from './quot-list.component';

describe('QuotListComponent', () => {
  let component: QuotListComponent;
  let fixture: ComponentFixture<QuotListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
