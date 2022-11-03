import { Component, OnInit } from '@angular/core';
import {Comments} from "../../model/comments";
import {CommentsService} from "../../services/comments.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments: Comments[]
  constructor(
      private commentsService: CommentsService
  ) { }

  getComments(): void {
    this.commentsService.getComments()
        .subscribe(comments => this.comments = comments)
  }

  ngOnInit() {
    this.getComments()
  }

}
