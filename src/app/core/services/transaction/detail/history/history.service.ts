import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IHistory } from 'src/app/core/interfaces/transaction.interface';
import { environment } from "src/environments/environment"

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private httpClient: HttpClient) {}

  getHistories(): Observable < IHistory[] > {
    return this.httpClient.get < IHistory[] > (`${environment.baseUrl}/histories`).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

}
