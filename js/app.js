'use strtict' 
var workHours = [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm'
];
arrLocations = [];
/******************* Constructor */
function Location(locationName, locationMinCust, locationMaxCust, locationCookiPerSale) {
    this.name = locationName;
    this.minCust = locationMinCust;
    this.maxCust = locationMaxCust;
    this.cookiPerSale = locationCookiPerSale;
    arrLocations.push(this);
    this.customers = [];
    this.cookis = [];
    if (this.name == 'ss') {
        this.customers = [];
        this.cookis = [];
    }
}

var seattle = new Location('Seattle', 23, 65, 6.3);
var tokyo = new Location('Tokyo', 3, 24, 1.2);
var dubai = new Location('Dubai', 11, 38, 3.7);
var paris = new Location('Paris', 20, 38, 2.3);
var lima = new Location('Lima', 2, 16, 4.6);
var container = document.getElementById('mainDiv');
var tbl = document.createElement('table');
container.appendChild(tbl);

/****************Function to get Random Customer per hour */
Location.prototype.randCustPerHour = function () { 
    for (var i = 0; i < workHours.length; i++) {
        this.customers[i] = Math.ceil(Math.random() * (this.maxCust - this.minCust + 1)) + Number(this.minCust);
    }
}
// ///////////////****Function to get number ofg cookie per hour */
Location.prototype.getCookis = function () {
    var total = 0;
    this.randCustPerHour();
    for (var i = 0; i < workHours.length; i++) {
        this.cookis[i] = Math.ceil(this.cookiPerSale * this.customers[i]);
        total += this.cookis[i];
    }
    this.cookis.push(total);
}

// //////////**functioon to get the totals per hour */
function getTotalsPerhour() {
    var arr = [];
    var total = 0;
    var sum = 0;
    for (let index = 0; index < workHours.length; index++) {
        total = 0;
        for (let i = 0; i < arrLocations.length; i++) {
            total += arrLocations[i].cookis[index]


        }
        sum += total;
        arr[index] = total;
        arr.push(sum);
    }
    return arr;
}
function renderTotal() {
    var totalPerHour = getTotalsPerhour()
    totalPerHour.unshift('Totals')
    var lastRow = document.createElement('tr');
    tbl.appendChild(lastRow);
    for (let x = 0; x < totalPerHour.length; x++) {
        var cell = document.createElement('td');
        lastRow.appendChild(cell);
        cell.textContent = `${
            totalPerHour[x]
        }`;
    }
}
Location.prototype.renderBudy = function () {
    this.getCookis();
    var newRow = document.createElement('tr');
    newRow.setAttribute('id', this.name)
    tbl.appendChild(newRow);

    var textData = document.createElement('td');
    newRow.appendChild(textData);
    textData.textContent = `${
        this.name
    }`

    for (let j = 0; j < this.cookis.length; j++) {
        var textData = document.createElement('td');
        newRow.appendChild(textData);
        textData.textContent = `${
            this.cookis[j]
        }`
    }
}


function render() { // //**/**////////SetUp Arrays */ */

    var headerRow = document.createElement('tr');
    tbl.appendChild(headerRow);

    // workHours.unshift(' ');
    var textHeader = document.createElement('th');
    headerRow.appendChild(textHeader);
    textHeader.textContent = ' ';

    for (var index = 0; index < workHours.length; index++) {
        var textHeader = document.createElement('th');
        headerRow.appendChild(textHeader);
        textHeader.textContent = `${
            workHours[index]
        }`;
    }

    var textHeader = document.createElement('th');
    headerRow.appendChild(textHeader);
    textHeader.textContent = 'Totals';
    for (i = 0; i < arrLocations.length; i ++) {
        arrLocations[i].renderBudy();
    }
}render();
renderTotal();

var submition = document.getElementById('frmAdd');
submition.addEventListener("submit", function () {
    event.preventDefault();
    var a1 = event.target.l_Name.value; 
    var a2 = event.target.l_maxCust.value;
    var a3 = event.target.l_minCust.value;
    var a4 = event.target.l_avgCookies.value;
    var myLocation = new Location(a1, a3, a2, a4);
    for (let index = 0; index < arrLocations.length; index++) {
        if (myLocation.name == arrLocations[index].name) {
            console.log(myLocation.name);
            var item = document.getElementById(myLocation.name);
            item.parentNode.removeChild(item);
            tbl.removeChild(tbl.lastChild);
            myLocation.renderBudy();
            renderTotal();
            break;
        } else {
            tbl.removeChild(tbl.lastChild);
            myLocation.renderBudy();
            renderTotal();
            break;
        }

    }

});
