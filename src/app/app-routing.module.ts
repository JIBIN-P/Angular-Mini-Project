import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryListComponent } from './libraries/library-list.component';
import { LibraryDetailComponent } from './libraries/library-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { LibraryDetailGuard } from './libraries/library-detail.guard';


const routes: Routes = [
  {path: 'library', component: LibraryListComponent},
  {path: 'library/:id', canActivate: [ LibraryDetailGuard ], component: LibraryDetailComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
