import { Component, OnInit } from '@angular/core';
import { PostType, Post, PostStatus } from 'src/app/shared/models/post-response';
import { ActivatedRoute } from '@angular/router';
import { TimelineService } from 'src/app/core/http/timeline.service';

@Component({
  selector: 'create-post-timeline',
  templateUrl: './create-post-timeline.component.html',
  styleUrls: ['./create-post-timeline.component.scss']
})
export class CreatePostTimelineComponent implements OnInit {
  public selectedPostType: string = 'IMAGE';
  public ePostType: PostType = PostType.IMAGE;
  public postTimeline: Post;
  public postOption: number = 0; // 1: schedule, 0: post now
  public scheduleTime: Date;
  public id: number;

  public payloadData: any;

  public mode: number = 0;// 1: edit, 0: new
  constructor(private route: ActivatedRoute, private timelineService: TimelineService) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (this.id) { 
      this.mode = 1;
      this.timelineService.getPostbyId().subscribe(res =>{
        this.postTimeline = res.resultData;
       })
     }

  }

  public changePostType(type: string) {
    this.selectedPostType = type;
    this.ePostType = PostType[type];
  }

  public isActiveType(type: string): boolean {
    return this.selectedPostType == type;
  }

  public createPost(): void {
    const newPost: Post = {
      id: null,
      type: this.ePostType,
      status: this.postOption == 0 ? PostStatus.PUBLISHED : PostStatus.DRAFTED,
      scheduledTime: this.postOption == 0 ? null : this.scheduleTime.getTime(),
      images: this.postTimeline.images,
      createdAt: Date.now() ,
      updatedAt: Date.now()
    }
    // Send this payload to API create Post;
    this.payloadData = newPost;
    console.log(newPost);
  }

  public editPost(): void {
    const editedPost: Post = {
      ...this.postTimeline,
      updatedAt : Date.now()
    }
     // Send this payload to API update Post;
     this.payloadData = editedPost;
    console.log(editedPost);
  }

  public imagesChange(images) {
    this.postTimeline.images = images;
  }
}
