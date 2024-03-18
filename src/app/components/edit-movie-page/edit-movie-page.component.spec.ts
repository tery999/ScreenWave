import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMoviePageComponent } from './edit-movie-page.component';

describe('EditMoviePageComponent', () => {
  let component: EditMoviePageComponent;
  let fixture: ComponentFixture<EditMoviePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMoviePageComponent]
    });
    fixture = TestBed.createComponent(EditMoviePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
