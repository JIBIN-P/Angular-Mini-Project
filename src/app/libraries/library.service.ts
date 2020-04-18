import { Injectable } from '@angular/core';
import { ILibrary } from './library';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class LibraryService {
	private libraryUrl = 'api/libraries/libraries.json';

	constructor(private http: HttpClient) {}

	getLibraries(): Observable<ILibrary[]> {
		return this.http.get<ILibrary[]>(this.libraryUrl).pipe(
			// tap(data => console.log('All ' + JSON.stringify(data))),
			catchError(this.handleError)
		);
	}

	private handleError(err: HttpErrorResponse) {
		let errorMessage = '';

		if (err.error instanceof ErrorEvent) {
			errorMessage = `An error occurred ${err.error.message}`;
		} else {
			errorMessage = `The server returned code ${err.status}, error message is ${err.message}`;
		}
		console.error(errorMessage);
		return throwError(errorMessage);
	}
}
