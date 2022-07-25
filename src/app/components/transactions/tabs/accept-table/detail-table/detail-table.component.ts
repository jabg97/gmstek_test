import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IDetail, ITransaction } from 'src/app/core/interfaces/transaction.interface';
import { DetailService } from 'src/app/core/services/transaction/detail/detail.service';

@Component({
  selector: 'transaction-detail-table',
  templateUrl: './detail-table.component.html',
  styleUrls: ['./detail-table.component.scss']
})
export class DetailTableComponent implements OnInit {

  @Input() transaction!: ITransaction | null;
  data: IDetail[] = [];

  slideConfig = { slidesToShow: 1, slidesToScroll: 1 };

    constructor(private detailService: DetailService) {}

    ngOnInit() {
      this.detailService.getDetails().subscribe((data: any) => {
        if (this.transaction?._id) {
          data = data.filter((row:IDetail) => row.transaction_id == this.transaction?._id);
        }
        this.dataSource = new MatTableDataSource < IDetail > (data);
      });
    }

    displayedColumns: string[] = ['merchant_description', 'product_code','quantity','retail_price','gov_price','amount','buttons'];
  dataSource = new MatTableDataSource < IDetail > (this.data);

}
