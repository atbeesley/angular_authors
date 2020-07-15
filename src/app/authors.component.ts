import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './author/authors.service';


@Component({
    selector: 'authors', 
    template: `<h2>There are {{ authors.length }} {{ title }}.</h2>
    <ul>
    <li *ngFor="let author of authors">
        {{ author }}
    </li>
</ul>`
})

export class AuthorsComponent implements OnInit {
    title = "authors";
    authors; 

    constructor(){
        let service = new AuthorsService();
        this.authors = service.getAuthors();
    }
}
