'use strict';

// Declaring store location objects
var pikeStore = {
  displayName: '1st and Pike',
  minCustomerHour: 23,
  maxCustomerHour: 65,
  avgCookies: 6.3,
  openHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'],
  salesHourly: [],
  randomVisits: function() { // creates random salesHourly for calculating fake sales
    return Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour)) + this.minCustomerHour;
  },
  calculateHourly: function() { // calculates cookies sold
    for (var i = 1; i < this.openHours.length ; i++) {
      var number = this.randomVisits() * this.avgCookies;
      number = Math.floor(number); // ensures integer
      this.salesHourly.push(number);
    }
    var sum = this.salesHourly.reduce(function (accumulator, currentValue) { // sums up array of all sales
      return accumulator + currentValue;
    }, 0);
    this.salesHourly.push(sum); // pushes sum of array to last index position
  }
};
var seatacStore = {
  displayName: 'SeaTac Airport',
  minCustomerHour: 3,
  maxCustomerHour: 24,
  avgCookies: 1.2,
  openHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'],
  salesHourly: [],
  randomVisits: function() {
    return Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour)) + this.minCustomerHour;
  },
  calculateHourly: function() { // calculates cookies sold
    for (var i = 1; i < this.openHours.length ; i++) {
      var number = this.randomVisits() * this.avgCookies;
      number = Math.floor(number); // ensures integer
      this.salesHourly.push(number);
    }
    var sum = this.salesHourly.reduce(function (accumulator, currentValue) { // sums up array of all sales
      return accumulator + currentValue;
    }, 0);
    this.salesHourly.push(sum); // pushes sum of array to last index position
  }
};
var centerStore = {
  displayName: 'Seattle Center',
  minCustomerHour: 11,
  maxCustomerHour: 38,
  avgCookies: 3.7,
  openHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'],
  salesHourly: [],
  randomVisits: function() {
    return Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour)) + this.minCustomerHour;
  },
  calculateHourly: function() { // calculates cookies sold
    for (var i = 1; i < this.openHours.length ; i++) {
      var number = this.randomVisits() * this.avgCookies;
      number = Math.floor(number); // ensures integer
      this.salesHourly.push(number);
    }
    var sum = this.salesHourly.reduce(function (accumulator, currentValue) { // sums up array of all sales
      return accumulator + currentValue;
    }, 0);
    this.salesHourly.push(sum); // pushes sum of array to last index position
  }
};
var caphillStore = {
  displayName: 'Capitol Hill',
  minCustomerHour: 20,
  maxCustomerHour: 38,
  avgCookies: 2.3,
  openHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'],
  salesHourly: [],
  randomVisits: function() {
    return Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour)) + this.minCustomerHour;
  },
  calculateHourly: function() { // calculates cookies sold
    for (var i = 1; i < this.openHours.length ; i++) {
      var number = this.randomVisits() * this.avgCookies;
      number = Math.floor(number); // ensures integer
      this.salesHourly.push(number);
    }
    var sum = this.salesHourly.reduce(function (accumulator, currentValue) { // sums up array of all sales
      return accumulator + currentValue;
    }, 0);
    this.salesHourly.push(sum); // pushes sum of array to last index position
  }
};
var alkiStore = {
  displayName: 'Alki',
  minCustomerHour: 2,
  maxCustomerHour: 16,
  avgCookies: 4.6,
  openHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'],
  salesHourly: [],
  randomVisits: function() {
    return Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour)) + this.minCustomerHour;
  },
  calculateHourly: function() { // calculates cookies sold
    for (var i = 1; i < this.openHours.length ; i++) {
      var number = this.randomVisits() * this.avgCookies;
      number = Math.floor(number); // ensures integer
      this.salesHourly.push(number);
    }
    var sum = this.salesHourly.reduce(function (accumulator, currentValue) { // sums up array of all sales
      return accumulator + currentValue;
    }, 0);
    this.salesHourly.push(sum); // pushes sum of array to last index position
  }
};

// Add hourly sales
pikeStore.calculateHourly();
seatacStore.calculateHourly();
centerStore.calculateHourly();
caphillStore.calculateHourly();
alkiStore.calculateHourly();


// function for adding ul/li elements for display
function displayStore(storeSelection) {
  var titleElement = document.createElement('h3');
  titleElement.textContent = storeSelection.displayName;
  var ulElement = document.createElement('ul');
  for(var i = 0; i < storeSelection.salesHourly.length; i++) {
    var liElement = document.createElement('li');
    liElement.textContent = storeSelection.openHours[i] + ': ' + storeSelection.salesHourly[i] + ' cookies';
    ulElement.appendChild(liElement);
  }
  var listsSection = document.getElementById('lists'); 
  listsSection.appendChild(titleElement);
  listsSection.appendChild(ulElement);
}

// display lists
displayStore(pikeStore);
displayStore(seatacStore);
displayStore(centerStore);
displayStore(caphillStore);
displayStore(alkiStore);