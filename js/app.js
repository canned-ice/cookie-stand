'use strict';

// Declaring store location objects
var pikeStore = {
  displayName: '1st and Pike',
  minCustomerHour: 23,
  maxCustomerHour: 65,
  avgCookies: 6.3,
  visitsHourly: function() {
    return Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour +1)) + this.minCustomerHour;
  }
};
var seatacStore = {
  displayName: 'SeaTac Airport',
  minCustomerHour: 3,
  maxCustomerHour: 24,
  avgCookies: 1.2,
  visitsHourly: function() {
    return Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour +1)) + this.minCustomerHour;
  }
};
var centerStore = {
  displayName: 'Seattle Center',
  minCustomerHour: 11,
  maxCustomerHour: 38,
  avgCookies: 3.7,
  visitsHourly: function() {
    return Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour +1)) + this.minCustomerHour;
  }
};
var caphillStore = {
  displayName: 'Capitol Hill',
  minCustomerHour: 20,
  maxCustomerHour: 38,
  avgCookies: 2.3,
  visitsHourly: function() {
    return Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour +1)) + this.minCustomerHour;
  }
};
var alkiStore = {
  displayName: 'Alki',
  minCustomerHour: 2,
  maxCustomerHour: 16,
  avgCookies: 4.6,
  visitsHourly: function() {
    return Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour +1)) + this.minCustomerHour;
  }
};