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
  assigns = false;
  revokes = false;

  available = [{
    name: 'John Doe',
    img: 'assets/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 2',
    img: 'assets/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 3',
    img: 'assets/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 4',
    img: 'assets/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 5',
    img: 'assets/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 6',
    img: 'assets/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 7',
    img: 'assets/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 8',
    img: 'assets/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 9',
    img: 'assets/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 10',
    img: 'assets/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 11',
    img: 'assets/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 12',
    img: 'assets/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 13',
    img: 'assets/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 14',
    img: 'assets/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 15',
    img: 'assets/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 16',
    img: 'assets/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 17',
    img: 'assets/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 18',
    img: 'assets/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 19',
    img: 'assets/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 20',
    img: 'assets/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 21',
    img: 'assets/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 22',
    img: 'assets/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 23',
    img: 'assets/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 24',
    img: 'assets/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 25',
    img: 'assets/Mauro-profile-picture.jpg'
  }, {
    name: 'John Doe 26',
    img: 'assets/Mauro-profile-picture.jpg'
  }];

  assigned = [];

  assign() {
    if(!this.assigns) {
      alert('Select a agent to assign.');
      return;
    }
    if (!this.available.length) {
      alert('No one available to assign.');
      return;
    }
    this.assigned.push(this.available[this.aselected]);
    this.available.splice(this.aselected, 1)
    this.aselected = 0;
    this.assigns = false;
  }

  revoke() {
    if(!this.revokes) {
      alert('Select a agent to revoke');
      return;
    }
    if (!this.assigned.length) {
      alert('No one available to revoke');
      return;
    }
    this.available.push(this.assigned[this.asselected]);
    this.assigned.splice(this.asselected, 1)
    this.asselected = 0;
    this.revokes = false;
  }

  aselect(i) {
    $('.auser-'+this.aselected).css('background-color', 'white');
    this.aselected = i;
    $('.auser-'+i).css('background-color', '#eae9e5');
    this.assigns = true;
  }

  asselect(i) {
    $('.asuser-'+this.asselected).css('background-color', 'white');
    this.asselected = i;
    $('.asuser-'+i).css('background-color', '#eae9e5');
    this.revokes = true;
  }
}