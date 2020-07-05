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
  tableConfig = {search: true};
  // columns = [{prop: 'Repository'}];
  columns = ['Repositories'];


  constructor(private  docker: DockerService) {
  }

  ngOnInit(): void {
    this.docker.Catalog().subscribe((data) => {
        this.repositories = data['repositories'];
        // data['repositories'].map((r) => {
        //   this.repositories.push(r);
        //   console.log(this.repositories);
        // });
      }
    );
  }

  TagList(image: string) {
    this.docker.TagsList(image).subscribe((data) => {
      this.repos[image] = data;
    });
  }

}
