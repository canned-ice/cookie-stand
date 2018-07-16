'use strict';

// Declaring store location objects
var pikeStore = {
  displayName: '1st and Pike',
  minCustomerHour: 23,
  maxCustomerHour: 65,
  avgCookies: 6.3,
  openHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  visitsHourly: [],
  randomVisits: function() {
    return Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour +1)) + this.minCustomerHour;
  }
};
var seatacStore = {
  displayName: 'SeaTac Airport',
  minCustomerHour: 3,
  maxCustomerHour: 24,
  avgCookies: 1.2,
  openHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  visitsHourly: [],
  randomVisits: function() {
    return Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour +1)) + this.minCustomerHour;
  }
};
var centerStore = {
  displayName: 'Seattle Center',
  minCustomerHour: 11,
  maxCustomerHour: 38,
  avgCookies: 3.7,
  openHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  visitsHourly: [],
  randomVisits: function() {
    return Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour +1)) + this.minCustomerHour;
  }
};
var caphillStore = {
  displayName: 'Capitol Hill',
  minCustomerHour: 20,
  maxCustomerHour: 38,
  avgCookies: 2.3,
  openHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  visitsHourly: [],
  randomVisits: function() {
    return Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour +1)) + this.minCustomerHour;
  }
};
var alkiStore = {
  displayName: 'Alki',
  minCustomerHour: 2,
  maxCustomerHour: 16,
  avgCookies: 4.6,
  openHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  visitsHourly: [],
  randomVisits: function() {
    return Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour +1)) + this.minCustomerHour;
  }
};
var calculateHourly = function(x) {
  for (var i = 0; i < 16; i++) {
    x.visitsHourly.push(x.randomVisits() * x.avgCookies);
  }
};

// Add hourly visits
calculateHourly(pikeStore);
calculateHourly(seatacStore);
calculateHourly(centerStore);
calculateHourly(caphillStore);
calculateHourly(alkiStore);