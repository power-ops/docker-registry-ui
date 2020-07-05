import {Component, Input, OnInit, ViewChild, SimpleChanges} from '@angular/core';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import {MatPaginator} from '@angular/material/paginator';

export class Config {
  search = false;
  scrollbarV = false;
  scrollbarH = false;
  rowHeight = 50;
  footerHeight = 50;
  headerHeight = 50;
  limit = 10;
  columnMode = 'force';
  pageSize = 10;
  pageSizeOptions = [5, 10, 20];
}

@Component({
  selector: 'element-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class ElementTableComponent implements OnInit {
  @Input() Rows: Array<any>;
  @Input() Columns: Array<any>;
  @Input() Config: Config;
  temp = [];
  config = new Config();
  rows: Array<any>;
  columns: Array<any>;
  @ViewChild(DatatableComponent, {static: false}) table: DatatableComponent;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() {
  }

  ngOnInit() {
    if (typeof (this.Config) !== 'undefined') {
      for (var k in this.Config) {
        this.config[k] = this.Config[k];
      }
    }
    if (typeof this.Columns !== 'undefined') {
      this.columns = this.Columns;
    }
    if (typeof this.Rows === 'undefined') {
      this.paginator.length = 0;
    } else {
      this.paginator.length = this.rows.length;
      this.rows = this.Rows;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['Rows']) {
      this.rows = changes['Rows'].currentValue;
      // this.table.recalculate();
    }
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter((d) => {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
