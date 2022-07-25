import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsPageComponent } from 'src/app/pages/transactions/transactions.component';

const routes: Routes = [
  { path: '', component: TransactionsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
