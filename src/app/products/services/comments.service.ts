import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private comments = [{
    name: 'Melon',
    comments: [{
      user: 'a1',
      comment: 'such a great melon'
    }]
  }];

  constructor() { }

  getComments(name: String): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const commentsForProduct = this.comments.find(comment => comment.name === name);
      if (commentsForProduct && commentsForProduct.comments && commentsForProduct.comments.length) {
        resolve(commentsForProduct.comments);
      } else {
        resolve([]);
      }
    });
  }
}
