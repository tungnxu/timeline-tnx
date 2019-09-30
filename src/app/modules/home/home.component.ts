import { Component, OnInit } from '@angular/core';
import { TimelineService } from 'src/app/core/http/timeline.service';
import { Post } from 'src/app/shared/models/post-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public demoPost: Post;
  constructor(private timelineService: TimelineService) { }

  ngOnInit() {
    this.timelineService.getPostbyId().subscribe(res =>{
     this.demoPost = res.resultData;
    })
  }

}
