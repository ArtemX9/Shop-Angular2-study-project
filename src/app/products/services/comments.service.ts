import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private comments = [];

  constructor(private http: HttpClient) {
  }

  getComments(name: String): Promise<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/comments?name=${name}`).toPromise().then(comments => {
      const commentsForProduct = comments[0];
      if (commentsForProduct && commentsForProduct.comments && commentsForProduct.comments.length) {
        return (commentsForProduct.comments);
      } else {
        return ([]);
      }
    });
  }
}
