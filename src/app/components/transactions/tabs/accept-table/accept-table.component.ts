import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { ITransaction } from 'src/app/core/interfaces/transaction.interface';
import { TransactionService } from 'src/app/core/services/transaction/transaction.service';

@Component({
  selector: 'transaction-accept-table',
  templateUrl: './accept-table.component.html',
  styleUrls: ['./accept-table.component.scss']
})
export class AcceptTableComponent implements OnInit {
  data: ITransaction[] = [];
  expandedElement!: ITransaction | null;

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.transactionService.getTransactions().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource < ITransaction > (data);
      this.dataSource.paginator = this.paginator;
    })
  }

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  displayedColumns: string[] = ['details', 'select', 'date', 'merch_invoice', 'merchant','location', 'icao_iata', 'dodaac', 'tail', 'item', 'total', 'card', 'status'];
  dataSource = new MatTableDataSource < ITransaction > (this.data);
  selection = new SelectionModel < ITransaction > (true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row ? : ITransaction): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row._id + 1}`;
  }

}
