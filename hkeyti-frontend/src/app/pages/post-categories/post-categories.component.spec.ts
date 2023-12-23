import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCategoriesComponent } from './post-categories.component';

describe('PostCategoriesComponent', () => {
  let component: PostCategoriesComponent;
  let fixture: ComponentFixture<PostCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
