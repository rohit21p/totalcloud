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

  available = [{
    name: 'John Doe',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 2',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 2',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 2',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 2',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 2',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 2',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 2',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 2',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 2',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 2',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 2',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 2',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
  }];

  assigned = [{
    name: 'John Doe 3',
    img: 'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg'
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
    this.assigned.splice(this.asselected, 1)
    this.asselected = 0;
  }

  aselect(i) {
    $('.auser-'+this.aselected).css('background-color', 'white');
    this.aselected = i;
    $('.auser-'+i).css('background-color', '#eae9e5');
  }

  asselect(i) {
    $('.asuser-'+this.asselected).css('background-color', 'white');
    this.asselected = i;
    $('.asuser-'+i).css('background-color', '#eae9e5');
  }
}