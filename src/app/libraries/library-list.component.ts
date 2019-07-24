import { Component, OnInit } from '@angular/core';
import { ILibrary } from './library';

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
   
   constructor() {
      this.filteredLibraries = this.libraries;
      this.listFilter = '';
   }

	_listFilter = '';
	get listFilter() {
		return this._listFilter;
	}
	set listFilter(value: string) {
      this._listFilter = value;
		this.filteredLibraries = this.listFilter ? this.performFilter(this.listFilter) : this.libraries;
	}

	filteredLibraries: ILibrary[] = [];
	libraries: ILibrary[] = [
		{
			libraryId: 2,
			libraryName: 'Angular',
			libraryLink: 'https://angular.io/',
			librarySize: '2 Mb',
			downloads: 1000000103,
			starRating: 3,
			releaseDate: new Date(2016, 4, 9),
			imageUrl: 'https://cdn-images-1.medium.com/max/803/1*2GumncRemjwIHayYT0dBdw.png'
		},
		{
			libraryId: 5,
			libraryName: 'React',
			libraryLink: 'https://reactjs.org/',
			librarySize: '16 Kb',
			downloads: 1500001034,
			starRating: 4,
			releaseDate: new Date(2014, 4, 12),
			imageUrl: 'https://arcweb.co/wp-content/uploads/2016/10/react-logo-1000-transparent.png'
		},
		{
			libraryId: 2,
			libraryName: 'Vue-Js',
			libraryLink: 'https://vuejs.org/',
			librarySize: '20 Kb',
			downloads: 1000000120,
			starRating: 4.5,
			releaseDate: new Date(2017, 7, 19),
			imageUrl: 'https://www.vuemastery.com/images/lgo-vue-news.svg'
		}
	];

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
		console.log('This is OnInit');
	}
}
