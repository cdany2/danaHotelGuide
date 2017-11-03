import { Component } from '@angular/core';

/**
 * Generated class for the RestaurantComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'restaurant',
  templateUrl: 'restaurant.html'
})
export class RestaurantComponent {

  text: string;

  constructor() {
    console.log('Hello RestaurantComponent Component');
    this.text = 'Hello World';
  }

}
