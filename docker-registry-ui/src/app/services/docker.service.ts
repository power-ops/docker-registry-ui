import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DockerService {

  constructor(private http: HttpClient) {
  }

  Catalog() {
    return this.http.get('/v2/_catalog');
  }

  TagsList(image: string) {
    return this.http.get('/v2/' + image + '/tags/list');
  }

  ImageReferevce(image, referevce: string) {
    return this.http.get('/v2/' + image + '/manifests/' + referevce);
  }
}
