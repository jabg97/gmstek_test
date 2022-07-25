import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { MockDataService } from 'src/app/core/data/mock-data.service';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkeletonComponent } from 'src/app/pages/layout/skeleton/skeleton.component';
import { AppRoutingModule } from './app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from 'src/app/components/layout/header/header.component';
import { TransactionsPageComponent } from 'src/app/pages/transactions/transactions.component';
import { SummaryComponent } from 'src/app/components/transactions/summary/summary.component';
import { AcceptTableComponent } from 'src/app/components/transactions/tabs/accept-table/accept-table.component';
import { DetailTableComponent } from 'src/app/components/transactions/tabs/accept-table/detail-table/detail-table.component';
import { HistoryTableComponent } from './components/transactions/tabs/accept-table/detail-table/history-table/history-table.component';
import { ImgCarouselComponent } from './components/core/img-carousel/img-carousel.component';
import { CardNumberPipe } from './core/pipe/card-number/card-number.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkeletonComponent,
    TransactionsPageComponent,
    SummaryComponent,
    AcceptTableComponent,
    DetailTableComponent,
    HistoryTableComponent,
    ImgCarouselComponent,
    CardNumberPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    SlickCarouselModule,
    MatButtonModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(MockDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
