import { Component } from '@angular/core';
import {Post} from '../classes/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Array<Post> = [];


  constructor() {
    this.posts.push(new Post('Mon premier post', 'Lorem impsum', 5, new Date()));
    this.posts.push(new Post('Mon deuxième post', 'Lorem impsum', -20, new Date()));
    this.posts.push(new Post('Mon dernier post', 'Lorem impsum', 0, new Date()));
  }
}
