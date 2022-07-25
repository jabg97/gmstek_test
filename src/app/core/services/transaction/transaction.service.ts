import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ITransaction } from 'src/app/core/interfaces/transaction.interface';
import { environment } from "src/environments/environment"

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient: HttpClient) {}

  getTransactions(): Observable < ITransaction[] > {
    return this.httpClient.get < ITransaction[] > (`${environment.baseUrl}/transactions`).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

}
