'use strict';

var allStores = [];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

// constructor for ze stores
function Store(displayName, minCustomerHour, maxCustomerHour, avgCookies) {
  this.displayName = displayName;
  this.minCustomerHour = minCustomerHour;
  this.maxCustomerHour = maxCustomerHour;
  this.avgCookies = avgCookies;
  this.salesHourly = [];
  allStores.push(this);
}

Store.prototype.render = function() { // creates random salesHourly for calculating fake sales
  for (var i = 1; i < hours.length; i++) {
    var randomVisits = Math.floor(Math.random() * (this.maxCustomerHour - this.minCustomerHour)) + this.minCustomerHour;
    var number = randomVisits * this.avgCookies;
    number = Math.floor(number); // ensures integer
    this.salesHourly.push(number); // pushes generated number to salesHourly index
  }
  var sum = this.salesHourly.reduce(function (accumulator, currentValue) { // sums up array of all sales
    return accumulator + currentValue;
  }, 0);
  this.salesHourly.push(sum); // pushes sum of array to last index position
};

var tableDisplay = function() {
  var salesTable = document.getElementById('salesTable');
  var trElement = document.createElement('tr');
  salesTable.appendChild(trElement);
  var thElementEmpty = document.createElement('th');
  thElementEmpty.textContent = ''; // empty first cell of header
  trElement.appendChild(thElementEmpty);
  for(var j = 0; j < hours.length; j++) { // adding hours header cells
    var thElement = document.createElement('th');
    thElement.textContent = hours[j];
    trElement.appendChild(thElement);
  }
  for(var k = 0; k < allStores.length; k++) { // adding data for store
    var trElement2 = document.createElement('tr');
    salesTable.appendChild(trElement2);
    var thName = document.createElement('th'); // adding displayName of store as 1st row header
    thName.textContent = allStores[k].displayName;
    trElement2.appendChild(thName);
    for(var m = 0; m < hours.length; m++) {
      var tdElement = document.createElement('td'); // adding data of store in row
      tdElement.textContent = allStores[k].salesHourly[m];
      trElement2.appendChild(tdElement);
    }
  }
};

// Transformers, ROLL OUT
var pike = new Store('1st and Pike', 23, 65, 6.3);
var seatac = new Store('SeaTac Airport', 3, 24, 1.2,);
var center = new Store('Seattle Center', 11, 38, 3.7, []);
var caphill = new Store('Capitol Hill', 20, 38, 2.3, []);
var alki = new Store('Alki', 2, 16, 4.6, []);

pike.render();
seatac.render();
center.render();
caphill.render();
alki.render();
tableDisplay();

// TO DO: separate functions out so end up with a header function, then a funtion to add each object instance
// also additional function for the footer