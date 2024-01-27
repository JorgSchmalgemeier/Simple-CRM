import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewComponent } from './add-review.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('AddReviewComponent', () => {
  let component: AddReviewComponent;
  let fixture: ComponentFixture<AddReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [AddReviewComponent]
    });
    fixture = TestBed.createComponent(AddReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
