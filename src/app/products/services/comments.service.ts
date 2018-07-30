import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppSettingsService} from '../../services/app-settings.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private comments = [];

  constructor(
    private http: HttpClient,
    private appSettings: AppSettingsService
  ) {
  }

  getComments(name: String): Promise<any[]> {
    return this.http.get<any[]>(`${this.appSettings.getApiUrl()}/comments?name=${name}`).toPromise().then(comments => {
      const commentsForProduct = comments[0];
      if (commentsForProduct && commentsForProduct.comments && commentsForProduct.comments.length) {
        return (commentsForProduct.comments);
      } else {
        return ([]);
      }
    });
  }
}
