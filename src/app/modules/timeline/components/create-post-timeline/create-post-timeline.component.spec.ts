import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostTimelineComponent } from './create-post-timeline.component';

describe('CreatePostTimelineComponent', () => {
  let component: CreatePostTimelineComponent;
  let fixture: ComponentFixture<CreatePostTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePostTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
