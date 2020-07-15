import { AuthorsService } from './author/authors.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './author/authors.component';
import { AuthorComponent } from './author/author.component';

@NgModule({
  declarations: [
    AppComponent, 
    AuthorComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ 
    AuthorsService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
