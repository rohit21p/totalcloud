import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aselected = 0;
  asselected = 0;

  available = [{
    name: 'John Doe',
    img: 'http://cacvs.org/wp-content/uploads/unknown-picture.jpg'
  }, {
    name: 'John Doe 2',
    img: 'http://cacvs.org/wp-content/uploads/unknown-picture.jpg'
  }];

  assigned = [{
    name: 'John Doe 3',
    img: 'http://cacvs.org/wp-content/uploads/unknown-picture.jpg'
  }];
}