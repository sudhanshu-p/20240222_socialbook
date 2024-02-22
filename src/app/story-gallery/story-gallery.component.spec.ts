import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryGalleryComponent } from './story-gallery.component';

describe('StoryGalleryComponent', () => {
  let component: StoryGalleryComponent;
  let fixture: ComponentFixture<StoryGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoryGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
