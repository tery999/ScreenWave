import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListComponentComponent } from './movie-list-component.component';

describe('MovieListComponentComponent', () => {
  let component: MovieListComponentComponent;
  let fixture: ComponentFixture<MovieListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieListComponentComponent]
    });
    fixture = TestBed.createComponent(MovieListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
