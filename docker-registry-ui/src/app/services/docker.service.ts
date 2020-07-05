import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DockerService {

  constructor(private http: HttpClient) {
  }

  catalog() {
    return this.http.get('/v2/_catalog');
  }
}
