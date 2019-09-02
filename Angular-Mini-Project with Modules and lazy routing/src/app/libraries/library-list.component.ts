import { Component, OnInit } from '@angular/core';
import { ILibrary } from './library';
import { LibraryService } from './library.service';

@Component({
	selector: 'app-libraries',
	templateUrl: './library-list.component.html',
	styleUrls: ['./library-list.component.css']
})
export class LibraryListComponent implements OnInit {
	pageTitle = 'Libraries';
	imageWidth = 50;
	imageMargin = 2;
	showImage = false;
	errorMessage: string;
   
   constructor(private libraryService: LibraryService) {
	}

	_listFilter = '';
	get listFilter() {
		return this._listFilter;
	}
	set listFilter(value: string) {
		this._listFilter = value;
		this.filteredLibraries = this.listFilter ? this.performFilter(this.listFilter) : this.libraries;
	}

	filteredLibraries: ILibrary[];
	libraries: ILibrary[];

	toggleImage(): void {
		this.showImage = !this.showImage;
   }
   
   performFilter(filterBy: string): ILibrary[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.libraries.filter((library: ILibrary) => 
         library.libraryName.toLocaleLowerCase().indexOf(filterBy) !== -1);
   }
   // Search MDN for Array filter to get it clear.

	ngOnInit(): void {
		this.libraryService.getLibraries().subscribe(
			libraries => {
				this.libraries = libraries;
				this.filteredLibraries = this.libraries;
			},
			error => this.errorMessage = error as any
		);
		
	}

	onRatingClicked(message: string): void {
		this.pageTitle = 'Library list: ' + message;
	}
}
