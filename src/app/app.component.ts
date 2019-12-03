import { Component } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aselected = 0;
  asselected = 0;
  assigns = true;
  revokes = true;

  available = [{
    name: 'John Doe',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 2',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 3',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 4',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 5',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 6',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 7',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 8',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 9',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 10',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 11',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 12',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 13',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 14',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 15',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 16',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 17',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 18',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 19',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 20',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 21',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 22',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 23',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 24',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 25',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 26',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }];

  assigned = [];

  assign() {
    if (!this.available.length) {
      alert('No one available to assign');
      return;
    }
    this.assigned.push(this.available[this.aselected]);
    this.available.splice(this.aselected, 1)
    this.aselected = 0;
    this.assigns = true;
  }

  revoke() {
    if (!this.assigned.length) {
      alert('No one available to revoke');
      return;
    }
    this.available.push(this.assigned[this.asselected]);
    this.assigned.splice(this.asselected, 1)
    this.asselected = 0;
    this.revokes = true;
  }

  aselect(i) {
    $('.auser-'+this.aselected).css('background-color', 'white');
    this.aselected = i;
    $('.auser-'+i).css('background-color', '#eae9e5');
    this.assigns = false;
  }

  asselect(i) {
    $('.asuser-'+this.asselected).css('background-color', 'white');
    this.asselected = i;
    $('.asuser-'+i).css('background-color', '#eae9e5');
    this.revokes = false;
  }
}