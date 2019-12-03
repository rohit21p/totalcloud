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

  assign() {
    if (!this.available.length) {
      alert('No one available to assign');
      return;
    }
    this.assigned.push(this.available[this.aselected]);
    this.available.splice(this.aselected, 1)
    this.aselected = 0;
  }

  revoke() {
    if (!this.assigned.length) {
      alert('No one available to revoke');
      return;
    }
    this.available.push(this.assigned[this.asselected]);
    this.assigned.splice(this.aselected, 1)
    this.asselected = 0;
  }
}