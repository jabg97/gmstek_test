import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IDetail } from 'src/app/core/interfaces/transaction.interface';
import { environment } from "src/environments/environment"

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private httpClient: HttpClient) {}

  getDetails(): Observable < IDetail[] > {
    return this.httpClient.get < IDetail[] > (`${environment.baseUrl}/details`).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

}
