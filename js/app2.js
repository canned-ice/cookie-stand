'use strict';

var allStores = [];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

// constructor for ze stores
function Store(name, minCustomerHour, maxCustomerHour, avgCookies) {
  this.name = name;
  this.minCustomerHour = minCustomerHour;
  this.maxCustomerHour = maxCustomerHour;
  this.avgCookies = avgCookies;
  this.salesHourly = [];
  allStores.push(this);
}

Store.prototype.dataGen = function() { // creates random salesHourly for calculating fake sales
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
Store.prototype.tableFill = function() {
  var salesTable = document.getElementById('sales');
  // for(var k = 0; k < allStores.length; k++) { // adding data for store
  var trElement2 = document.createElement('tr');
  salesTable.appendChild(trElement2);
  var thName = document.createElement('th'); // adding name of store as 1st row header
  thName.textContent = this.name;
  trElement2.appendChild(thName);
  for(var m = 0; m < hours.length; m++) {
    var tdElement = document.createElement('td'); // adding data of store in row
    tdElement.textContent = this.salesHourly[m];
    trElement2.appendChild(tdElement);
  }
};

var tableDisplay = function() {
  var sectionTable = document.getElementById('salesTable'); // find table id
  var salesTable = document.createElement('table'); // create a table element
  salesTable.setAttribute('id', 'sales'); // sets id of table to 'sales' for use later
  sectionTable.appendChild(salesTable); // append new table to section
  var theadElement = document.createElement('thead');
  salesTable.appendChild(theadElement);
  var trElement = document.createElement('tr'); // create a row element
  theadElement.appendChild(trElement); // append new row to table
  var thElementEmpty = document.createElement('th'); // create a table header(cell)
  thElementEmpty.textContent = ''; // empty first cell of header
  trElement.appendChild(thElementEmpty); // append empty cell to table
  for(var j = 0; j < hours.length; j++) { // adding hours header cells
    var thElement = document.createElement('th'); // create new table header(cell)
    thElement.textContent = hours[j]; // fill with hours
    trElement.appendChild(thElement); // append hours cell to table header
  }
};

var allStoreTotals = [];

var hourTotal = function(whatHour) {
  var timeSum = 0;
  var sumZ = 0;
  for (var z = 0; z < allStores.length; z++) { // allStores.length = 5
    var timeZ = allStores[z];
    var valueZ = timeZ.salesHourly[whatHour];
    sumZ = valueZ + timeSum;
    timeSum = valueZ + timeSum;
  }
  allStoreTotals.push(sumZ);
};

var allHours = function() {
  for (var v = 0; v < hours.length; v++) {
    hourTotal(v);
  }
  var tfootElement = document.createElement('tfoot');
  var totalRow = document.createElement('tr');
  var tableElement = document.getElementById('sales');
  tableElement.appendChild(tfootElement);
  tfootElement.appendChild(totalRow);
  var totalHeader = document.createElement('th');
  totalHeader.textContent = 'Total',
  totalRow.appendChild(totalHeader);
  for(var u = 0; u < allStoreTotals.length; u++) {
    var totalCell = document.createElement('td');
    totalCell.textContent = allStoreTotals[u];
    totalRow.appendChild(totalCell);
  }
};

// Transformers, ROLL OUT
var pike = new Store('1st and Pike', 23, 65, 6.3);
var seatac = new Store('SeaTac Airport', 3, 24, 1.2);
var center = new Store('Seattle Center', 11, 38, 3.7, []);
var caphill = new Store('Capitol Hill', 20, 38, 2.3, []);
var alki = new Store('Alki', 2, 16, 4.6, []);

var formSubmit = document.getElementById('submitButton');
var clicked = function() {
};
formSubmit.addEventListener('click', clicked);

var formElement = document.getElementById('newStoreForm');
formElement.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(allStores.length);

  var name = event.target.name.value;
  var minCustomerHour = event.target.minCustomerHour.value;
  var maxCustomerHour = event.target.maxCustomerHour.value;
  var avgCookies = event.target.avgCookies.value;

  var newStore = new Store(name, minCustomerHour, maxCustomerHour, avgCookies);
  console.log(allStores);
  newStore.dataGen();
  newStore.tableFill();
});

tableDisplay();

for (var store of allStores) {
  store.dataGen();
  store.tableFill();
}
console.log(pike); // eslint won't shut up about these variables
console.log(seatac);
console.log(center);
console.log(caphill);
console.log(alki);

allHours();