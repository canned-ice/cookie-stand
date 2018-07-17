'use strict';

function Store(name, displayName, minCustomerHour, maxCustomerHour, avgCookies, openHours, salesHourly) {
  this.name = name; // instance name
  this.displayName = displayName;
  this.minCustomerHour = minCustomerHour;
  this.maxCustomerHour = maxCustomerHour;
  this.avgCookies = avgCookies;
  this.openHours = openHours;
  this.salesHourly = salesHourly;
}