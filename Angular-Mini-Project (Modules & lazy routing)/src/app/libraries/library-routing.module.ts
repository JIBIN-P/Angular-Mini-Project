import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryListComponent } from './library-list.component';
import { LibraryDetailGuard } from './library-detail.guard';
import { LibraryDetailComponent } from './library-detail.component';

const routes1: Routes = [
  {path: 'library', component: LibraryListComponent},
  {path: 'library/:id', canActivate: [ LibraryDetailGuard ], component: LibraryDetailComponent},
  {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes1)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
