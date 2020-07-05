import {Component, OnInit} from '@angular/core';
import {DockerService} from '../services/docker.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  repositories = [];
  repos = {};
  columns = ['Repositories'];


  constructor(private  docker: DockerService) {
  }

  ngOnInit(): void {
    this.docker.Catalog().subscribe((data) => {
        // this.dataSource.paginator = data['repositories'];
        data['repositories'].map((r) => {
          this.repositories.push({position: 1, Repositories: r, weight: 1.0079, symbol: 'H'});
        });
      }
    );
  }

  TagList(image: string) {
    this.docker.TagsList(image).subscribe((data) => {
      this.repos[image] = data;
    });
  }

}
