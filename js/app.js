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
var calculateHourly = function(store) {
  for (var i = 0; i < 15; i++) {
    var number = store.randomVisits() * store.avgCookies;
    number = Math.floor(number);
    store.visitsHourly.push(number);
  }
};

// Add hourly visits
calculateHourly(pikeStore);
calculateHourly(seatacStore);
calculateHourly(centerStore);
calculateHourly(caphillStore);
calculateHourly(alkiStore);

function displayStore(storeSelection) {
  var ulEl = document.createElement('ul');
  for(var i = 0; i < storeSelection.visitsHourly.length; i++) {
    var liElement = document.createElement('li');
    liElement.textContent = storeSelection.openHours[i] + ': ' + storeSelection.visitsHourly[i] + ' cookies';
    ulEl.appendChild(liElement);
  }
  var listsSection = document.getElementById('lists'); listsSection.appendChild(ulEl);
}

// display lists
displayStore(pikeStore);
displayStore(seatacStore);
displayStore(centerStore);
displayStore(caphillStore);
displayStore(alkiStore);