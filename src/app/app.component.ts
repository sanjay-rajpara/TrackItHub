import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

export interface PeriodicElement {
  league: string;
  player: string;
  paymentDate: string;
  paid: number;
  comp: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { league: 'Test League', player: 'Travis Kruse', paymentDate: '01/02/2024', paid: 1.00, comp: 0.20 },
  { league: 'Test League', player: 'Jack William', paymentDate: '11/12/2024', paid: 7.00, comp: 0.23 },
  { league: 'Test League', player: 'Oliver Henry', paymentDate: '07/09/2024', paid: 5.00, comp: 0.25 },
  { league: 'Test League', player: 'Robert Sudduth', paymentDate: '05/05/2024', paid: 4.00, comp: 0.10 },
  { league: 'Test League', player: 'Noah Adan', paymentDate: '12/12/2024', paid: 2.00, comp: 0.55 },
  { league: 'Test League', player: 'Elijah Liam', paymentDate: '01/10/2024', paid: 2.00, comp: 0.75 },
  { league: 'Test League', player: 'Adrian Alexander', paymentDate: '10/02/2024', paid: 10.00, comp: 0.10 },
  { league: 'Test League', player: 'George Joseph', paymentDate: '01/01/2024', paid: 15.00, comp: 0.15 },
  { league: 'Test League', player: 'Andrew Alan', paymentDate: '09/07/2024', paid: 7.00, comp: 0.71 },
  { league: 'Test League', player: 'Benjamin Theodore', paymentDate: '01/01/2024', paid: 6.00, comp: 0.99 },
  { league: 'Test League', player: 'Amir Michael', paymentDate: '07/07/2024', paid: 6.00, comp: 1.00 },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTableModule, MatPaginatorModule, MatSortModule, MatIconModule, MatInputModule, MatFormFieldModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'TrackItHub';

  displayedColumns: string[] = ['league', 'player', 'paymentDate', 'paid', 'comp'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort) sort: any;
  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
