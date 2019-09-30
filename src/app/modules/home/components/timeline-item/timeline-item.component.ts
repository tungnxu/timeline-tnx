import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Post } from 'src/app/shared/models/post-response';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent implements OnInit {
  @Input() postData: Post;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    
  }

}
