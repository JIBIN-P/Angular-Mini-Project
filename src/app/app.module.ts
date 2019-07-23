import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryListComponent } from './libraries/library-list.component';
import { ConvertToSpaces } from './shared/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LibraryListComponent,
    ConvertToSpaces
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
