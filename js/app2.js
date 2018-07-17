'use strict';

var allStores = [];

function Store(displayName, minCustomerHour, maxCustomerHour, avgCookies, openHours, salesHourly) {
  this.displayName = displayName;
  this.minCustomerHour = minCustomerHour;
  this.maxCustomerHour = maxCustomerHour;
  this.avgCookies = avgCookies;
  this.openHours = openHours;
  this.salesHourly = salesHourly;
  this.randomVisits = function() { // creates random salesHourly for calculating fake sales
    return Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour)) + this.minCustomerHour;
  };
  this.calculateHourly = function() { // calculates cookies sold
    for (var i = 1; i < this.openHours.length ; i++) {
      var number = this.randomVisits() * this.avgCookies;
      number = Math.floor(number); // ensures integer
      this.salesHourly.push(number); // pushes generated number to salesHourly index
    }
    var sum = this.salesHourly.reduce(function (accumulator, currentValue) { // sums up array of all sales
      return accumulator + currentValue;
    }, 0);
    this.salesHourly.push(sum); // pushes sum of array to last index position
  };
  this.displayStore = function() {
    this.calculateHourly();
    var titleElement = document.createElement('h3');
    titleElement.textContent = this.displayName;
    var ulElement = document.createElement('ul');
    ulElement.appendChild(titleElement);
    for(var i = 0; i < this.salesHourly.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = this.openHours[i] + ': ' + this.salesHourly[i] + ' cookies';
      ulElement.appendChild(liElement);
    }
    var listsSection = document.getElementById('lists');
    listsSection.appendChild(ulElement);
  };

  allStores.push(this);
}
var pike = new Store('1st and Pike', 23, 65, 6.3, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'], []);
console.log(pike);
console.log(allStores);