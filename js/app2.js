'use strict';

var allStores = [];

function Store(displayName, minCustomerHour, maxCustomerHour, avgCookies, openHours, salesHourly) {
  this.displayName = displayName;
  this.minCustomerHour = minCustomerHour;
  this.maxCustomerHour = maxCustomerHour;
  this.avgCookies = avgCookies;
  this.openHours = openHours;
  this.salesHourly = salesHourly;

  allStores.push(this);
}
var pike = new Store('1st and Pike', 23, 65, 6.3, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'], []);
console.log(pike);
console.log(allStores);