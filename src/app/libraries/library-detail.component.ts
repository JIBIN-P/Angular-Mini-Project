import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ILibrary } from './library';

@Component({
  templateUrl: './library-detail.component.html',
  styleUrls: ['./library-detail.component.css']
})
export class LibraryDetailComponent implements OnInit {
  pageTitle = 'Library Details';
  library: ILibrary;

  constructor(private route: ActivatedRoute, private router: Router) { }

  onBack(): void {
    this.router.navigate(['/library']);
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.library = {
			libraryId: 2,
			libraryName: 'Ember',
			libraryLink: 'https://emberjs.com/',
			librarySize: '400Kb',
			downloads: 94000,
			starRating: 3,
			releaseDate: new Date(2013, 6, 20),
			imageUrl: 'https://cdn-images-1.medium.com/max/803/1*2GumncRemjwIHayYT0dBdw.png'
		};
  }
}
