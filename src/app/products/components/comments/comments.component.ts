import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {CommentsService} from '../../services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments = [];

  constructor(private route: ActivatedRoute, private commentsService: CommentsService) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: Params) => this.commentsService.getComments(params.get('name')))
    ).subscribe(comments => this.comments = comments, err => console.log(err));
  }

}
