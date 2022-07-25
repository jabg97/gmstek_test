import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IHistory, ITransaction } from 'src/app/core/interfaces/transaction.interface';
import { HistoryService } from 'src/app/core/services/transaction/detail/history/history.service';

@Component({
  selector: 'transaction-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss']
})
export class HistoryTableComponent implements OnInit {

  @Input() transaction!: ITransaction | null;
  data: IHistory[] = [];

    constructor(private historyService: HistoryService) {}

    ngOnInit() {
      this.historyService.getHistories().subscribe((data: any) => {
        if (this.transaction?._id) {
          data = data.filter((row:IHistory) => row.transaction_id == this.transaction?._id);
        }
        this.dataSource = new MatTableDataSource < IHistory > (data);
      });
    }



  displayedColumns: string[] = ['event', 'date_time'];
  dataSource = new MatTableDataSource < IHistory > (this.data);

}

