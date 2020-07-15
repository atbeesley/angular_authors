import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './author/authors.service';


@Component({
    selector: 'authors', 
    template: `<h2>{{ title }}</h2>
    <ul>
    <li *ngFor="let author of authors">
        {{ author }}
    </li>
</ul>`
})

export class AuthorsComponent implements OnInit {
    title = "List of Authors";
    authors; 

    constructor(){
        let service = new AuthorsService();
        this.authors = service.getAuthors();
    }
}
