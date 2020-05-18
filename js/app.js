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
function Location(locationName,locationMinCust,locationMaxCust,locationCookiPerSale){
this.name = locationName;
this.minCust = locationMinCust;
this.maxCust = locationMaxCust;
this.cookiPerSale = locationCookiPerSale;
arrLocations.push(this);
this.customers = randCustPerHour(this.minCust,this.maxCust);
this.cookis = getCookis(this.cookiPerSale,this.customers);
// this.cookis.unshift(this.name)
}

var seattle = new Location('Seattle',23,65,6.3);
var tokyo = new Location('Tokyo',3,24,1.2);
var dubai = new Location('Dubai',11,38,3.7);
var paris = new Location('Paris',20,38,2.3);
var lima = new Location('Lima',2,16,4.6);
var totalPerDay = getTotalsPerDay();
var totalPerHour = getTotalsPerhour()
console.log(totalPerHour);
render()
/****************Function to get Random Customer per hour */
function randCustPerHour(min,max){
    var arr = [];
    for (var i = 0; i < workHours.length; i++) {
        arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
      }
      return arr;
}
/////////////////****Function to get number ofg cookie per hour */
function getCookis(cookiPerSale,custNumber){
    var arr = [];
    for (var i = 0; i < workHours.length; i++) {
        arr[i] = Math.floor(cookiPerSale * custNumber[i]);
      }
      return arr;
}
////////////**functioon to get the totals */
function getTotalsPerDay(){
    var arr = [];
    var total = 0;
    for (let index = 0; index < arrLocations.length; index++) {
        total = 0;
        for (let i = 0; i < workHours.length; i++) {
            total += arrLocations[index].cookis[i]
            
        }
        arr[index] = total
    } 
    return arr; 
}
////////////**functioon to get the totals per hour */
function getTotalsPerhour(){
    var arr = [];
    var total = 0;
    var sum = 0;
    for (let index = 0; index < workHours.length; index++) {
        sum += total;
        total = 0;
        for (let i = 0; i < arrLocations.length; i++) {
            total += arrLocations[i].cookis[index]
            
            
        }
        arr[index] = total;
        arr.push(sum);
    } 
    return arr; 
}

function render(){
    ////**/**////////SetUp Arrays */ */
    for (let index = 0; index < arrLocations.length; index++) {
        arrLocations[index].cookis.unshift(arrLocations[index].name);
        arrLocations[index].cookis.push(totalPerDay[index]);
    }
    workHours.unshift(' ');
    workHours.push('Totals');
    totalPerHour.unshift('Totals')
    /** ****************** */
    var container = document.getElementById('mainDiv');
    var tbl = document.createElement('table');
    container.appendChild(tbl);
    var headerRow = document.createElement('tr');
    tbl.appendChild(headerRow);
    // workHours.unshift(' ');

    for (var index = 0;index < workHours.length;index++){
        var textHeader = document.createElement('th');
        headerRow.appendChild(textHeader);
        textHeader.textContent = `${workHours[index]}`;
    }

    for ( i = 0; i < arrLocations.length; i++) {
        // console.log(arrLocations.length);
        var newRow = document.createElement('tr');
        tbl.appendChild(newRow);
        for (let j = 0; j < arrLocations[i].cookis.length; j++) {
            var textData = document.createElement('td');
            newRow.appendChild(textData);
            textData.textContent = `${arrLocations[i].cookis[j]}`
            // console.log(arrLocations[i].cookis[j]);
        }
    }
    var lastRow = document.createElement('tr');
    tbl.appendChild(lastRow);
    for (let x = 0; x < totalPerHour.length; x++) {
        var cell = document.createElement('td');
        lastRow.appendChild(cell);
        cell.textContent = `${totalPerHour[x]}`;
        
    }
}

// var seattle = {
//     minCust: 23,
//     maxCust: 65,
//     AVG_Item_per_sale: 6.3,
//     cookiPerHour : [] ,
//     custPerHour : [] ,
//     getCustPerHour : function() {
    //     for (var i = 0; i < workHours.length; i++) {
    //         var perday = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    //         this.custPerHour[i] = perday;
    //       }
    // //    console.log('perday',perday);
    // },
//     projectionSales: [],
//     getCookiPerHour : function() {
//         // console.log("befor");
//         var total = 0 ;
        // for (let i = 0; i < workHours.length; i++) {
        //     this.cookiPerHour[i] = Math.ceil(this.custPerHour[i] * this.AVG_Item_per_sale);
        //     total = total + this.cookiPerHour[i];
        //     this.projectionSales[i] = workHours[i] +" : "+ this.cookiPerHour[i] + " cookies";
        // }
//         this.projectionSales[14] = 'Total :' + total;
//         // console.log("after");
//      },
//     render: function () {
//         console.log('hi');
//         var container = document.getElementById('mainDiv');
//         // console.log(container);

//         var articleE1 = document.createElement('article');
//         container.appendChild(articleE1);

//         var h2E1 = document.createElement('h2');
//         articleE1.appendChild(h2E1);
//         h2E1.textContent = 'Seattle';

//         var ulE1 = document.createElement('ul');
//         articleE1.appendChild(ulE1);

//         for (var i = 0; i < this.projectionSales.length; i++) {
//             var liE = document.createElement('li');
//             ulE1.appendChild(liE);
//             liE.textContent = this.projectionSales[i];
//         }
//         console.log(document);
//     }
// };
// seattle.getCustPerHour();
// seattle.getCookiPerHour();
// // console.log('customers ',seattle.custPerHour)
// console.log('cookies ',seattle.projectionSales)
// seattle.render();

// /***************************************************************** */
// var Tokyo = {
//     minCust: 3,
//     maxCust: 24,
//     AVG_Item_per_sale: 1.2,
//     cookiPerHour : [] ,
//     custPerHour : [] ,
//     getCustPerHour : function() {
//         for (var i = 0; i < workHours.length; i++) {
//             var perday = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//             this.custPerHour[i] = perday;
//           }
//     //    console.log('perday',perday);
//     },
//     projectionSales: [],
//     getCookiPerHour : function() {
//         // console.log("befor");
//         var total = 0 ;
//         for (let i = 0; i < workHours.length; i++) {
//             this.cookiPerHour[i] = Math.ceil(this.custPerHour[i] * this.AVG_Item_per_sale);
//             total = total + this.cookiPerHour[i];
//             this.projectionSales[i] = workHours[i] +" : "+ this.cookiPerHour[i] + " cookies";
//         }
//         this.projectionSales[14] = 'Total :' + total;
//         // console.log("after");
//      },
//      render: function () {
//         console.log('hi');
//         var container = document.getElementById('mainDiv');
//         // console.log(container);

//         var articleE1 = document.createElement('article');
//         container.appendChild(articleE1);

//         var h2E1 = document.createElement('h2');
//         articleE1.appendChild(h2E1);
//         h2E1.textContent = 'Tokyo';

//         var ulE1 = document.createElement('ul');
//         articleE1.appendChild(ulE1);

//         for (var i = 0; i < this.projectionSales.length; i++) {
//             var liE = document.createElement('li');
//             ulE1.appendChild(liE);
//             liE.textContent = this.projectionSales[i];
//         }
//         console.log(document);
//     }
// };
// Tokyo.getCustPerHour();
// Tokyo.getCookiPerHour();
// // console.log('customers ',seattle.custPerHour)
// console.log('cookies ',Tokyo.projectionSales)
// Tokyo.render();
// /****************************************************************** */
// var Dubai = {
//     minCust: 11,
//     maxCust: 38,
//     AVG_Item_per_sale: 3.7,
//     cookiPerHour : [] ,
//     custPerHour : [] ,
//     getCustPerHour : function() {
//         for (var i = 0; i < workHours.length; i++) {
//             var perday = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//             this.custPerHour[i] = perday;
//           }
//     //    console.log('perday',perday);
//     },
//     projectionSales: [],
//     getCookiPerHour : function() {
//         // console.log("befor");
//         var total = 0 ;
//         for (let i = 0; i < workHours.length; i++) {
//             this.cookiPerHour[i] = Math.ceil(this.custPerHour[i] * this.AVG_Item_per_sale);
//             total = total + this.cookiPerHour[i];
//             this.projectionSales[i] = workHours[i] +" : "+ this.cookiPerHour[i] + " cookies";
//         }
//         this.projectionSales[14] = 'Total :' + total;
//         // console.log("after");
//      },
//      render: function () {
//         console.log('hi');
//         var container = document.getElementById('mainDiv');
//         // console.log(container);

//         var articleE1 = document.createElement('article');
//         container.appendChild(articleE1);

//         var h2E1 = document.createElement('h2');
//         articleE1.appendChild(h2E1);
//         h2E1.textContent = 'Dubai';

//         var ulE1 = document.createElement('ul');
//         articleE1.appendChild(ulE1);

//         for (var i = 0; i < this.projectionSales.length; i++) {
//             var liE = document.createElement('li');
//             ulE1.appendChild(liE);
//             liE.textContent = this.projectionSales[i];
//         }
//         console.log(document);
//     }
// };
// Dubai.getCustPerHour();
// Dubai.getCookiPerHour();
// // console.log('customers ',seattle.custPerHour)
// console.log('cookies ',Dubai.projectionSales)
// Dubai.render();
// /******************************************************************* */
// var Paris = {
//     minCust: 20,
//     maxCust: 38,
//     AVG_Item_per_sale: 2.3,
//     cookiPerHour : [] ,
//     custPerHour : [] ,
//     getCustPerHour : function() {
//         for (var i = 0; i < workHours.length; i++) {
//             var perday = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//             this.custPerHour[i] = perday;
//           }
//     //    console.log('perday',perday);
//     },
//     projectionSales: [],
//     getCookiPerHour : function() {
//         // console.log("befor");
//         var total = 0 ;
//         for (let i = 0; i < workHours.length; i++) {
//             this.cookiPerHour[i] = Math.ceil(this.custPerHour[i] * this.AVG_Item_per_sale);
//             total = total + this.cookiPerHour[i];
//             this.projectionSales[i] = workHours[i] +" : "+ this.cookiPerHour[i] + " cookies";
//         }
//         this.projectionSales[14] = 'Total :' + total;
//         // console.log("after");
//      },
//      render: function () {
//         console.log('hi');
//         var container = document.getElementById('mainDiv');
//         // console.log(container);

//         var articleE1 = document.createElement('article');
//         container.appendChild(articleE1);

//         var h2E1 = document.createElement('h2');
//         articleE1.appendChild(h2E1);
//         h2E1.textContent = 'Paris';

//         var ulE1 = document.createElement('ul');
//         articleE1.appendChild(ulE1);

//         for (var i = 0; i < this.projectionSales.length; i++) {
//             var liE = document.createElement('li');
//             ulE1.appendChild(liE);
//             liE.textContent = this.projectionSales[i];
//         }
//         console.log(document);
//     }
// };
// Paris.getCustPerHour();
// Paris.getCookiPerHour();
// // console.log('customers ',seattle.custPerHour)
// console.log('cookies ',Paris.projectionSales)
// Paris.render();
// /******************************************************************* */
// var Lima = {
//     minCust: 2,
//     maxCust: 16,
//     AVG_Item_per_sale: 4.6,
//     cookiPerHour : [] ,
//     custPerHour : [] ,
//     getCustPerHour : function() {
//         for (var i = 0; i < workHours.length; i++) {
//             var perday = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//             this.custPerHour[i] = perday;
//           }
//     //    console.log('perday',perday);
//     },
//     projectionSales: [],
//     getCookiPerHour : function() {
//         // console.log("befor");
//         var total = 0 ;
//         for (let i = 0; i < workHours.length; i++) {
//             this.cookiPerHour[i] = Math.ceil(this.custPerHour[i] * this.AVG_Item_per_sale);
//             total = total + this.cookiPerHour[i];
//             this.projectionSales[i] = workHours[i] +" : "+ this.cookiPerHour[i] + " cookies";
//         }
//         this.projectionSales[14] = 'Total :' + total;
//         // console.log("after");
//      },
//      render: function () {
//         console.log('hi');
//         var container = document.getElementById('mainDiv');
//         // console.log(container);

//         var articleE1 = document.createElement('article');
//         container.appendChild(articleE1);

//         var h2E1 = document.createElement('h2');
//         articleE1.appendChild(h2E1);
//         h2E1.textContent = 'Lima';

//         var ulE1 = document.createElement('ul');
//         articleE1.appendChild(ulE1);

//         for (var i = 0; i < this.projectionSales.length; i++) {
//             var liE = document.createElement('li');
//             ulE1.appendChild(liE);
//             liE.textContent = this.projectionSales[i];
//         }
//         console.log(document);
//     }
// };
// Lima.getCustPerHour();
// Lima.getCookiPerHour();
// // console.log('customers ',seattle.custPerHour)
// console.log('cookies ',Lima.projectionSales)
// Lima.render();
