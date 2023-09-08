import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMoviesComponent } from './input-movies.component';

describe('InputMoviesComponent', () => {
  let component: InputMoviesComponent;
  let fixture: ComponentFixture<InputMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputMoviesComponent]
    });
    fixture = TestBed.createComponent(InputMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
