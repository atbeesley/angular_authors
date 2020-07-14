import { Component } from '@angular/core';

@Component({
    selector: 'authors', 
    template: `<h2>{{ title }}</h2>`
})

export class AuthorsComponent {
    title = "List of Authors";
    authors; 
}
