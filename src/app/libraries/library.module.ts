import { LibraryRoutingModule } from './library-routing.module';
import { FormsModule } from '@angular/forms';
import { ConvertToSpaces } from './../shared/convert-to-spaces.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryListComponent } from './library-list.component';
import { LibraryDetailComponent } from './library-detail.component';
import { StarComponent } from '../shared/star.component';
import { RouterModule } from '@angular/router';
import { LibraryDetailGuard } from './library-detail.guard';



@NgModule({
  declarations: [
    LibraryListComponent,
    LibraryDetailComponent,
    ConvertToSpaces,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    LibraryRoutingModule
  ]
})
export class LibraryModule { }
