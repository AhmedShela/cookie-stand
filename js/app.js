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

var seattle = {
    MinCust: 23,
    MaxCust: 65,
    AVG_Item_per_sale: 6.3,
    cookiPerHour : [] ,
    custPerHour : [] ,
    getCustPerHour : function() {
        for (var i = 0; i < workHours.length; i++) {
            var perday = Math.floor(Math.random() * (this.MaxCust - this.MinCust + 1)) + this.MinCust;
            this.custPerHour[i] = Math.floor(perday/14);
          }
    //    console.log('perday',perday);
    },
    projectionSales: [],
    getCookiPerHour : function() {
        // console.log("befor");
        var total = 0 ;
        for (let i = 0; i < workHours.length; i++) {
            this.cookiPerHour[i] = Math.ceil(this.custPerHour[i] * this.AVG_Item_per_sale);
            total = total + this.cookiPerHour[i];
            this.projectionSales[i] = workHours[i] +" : "+ this.cookiPerHour[i] + " cookies";
        }
        this.projectionSales[14] = 'Total :' + total;
        // console.log("after");
     },
    render: function () {
        console.log('hi');
        var container = document.getElementById('mainDiv');
        // console.log(container);

        var articleE1 = document.createElement('article');
        container.appendChild(articleE1);

        var h2E1 = document.createElement('h2');
        articleE1.appendChild(h2E1);
        h2E1.textContent = 'Seattle';

        var ulE1 = document.createElement('ul');
        articleE1.appendChild(ulE1);

        for (var i = 0; i < this.projectionSales.length; i++) {
            var liE = document.createElement('li');
            ulE1.appendChild(liE);
            liE.textContent = this.projectionSales[i];
        }
        console.log(document);
    }
};
seattle.getCustPerHour();
seattle.getCookiPerHour();
// console.log('customers ',seattle.custPerHour)
console.log('cookies ',seattle.projectionSales)
seattle.render();

/***************************************************************** */
var Tokyo = {
    MinCust: 3,
    MaxCust: 24,
    AVG_Item_per_sale: 1.2,
    cookiPerHour : [] ,
    custPerHour : [] ,
    getCustPerHour : function() {
        for (var i = 0; i < workHours.length; i++) {
            var perday = Math.floor(Math.random() * (this.MaxCust - this.MinCust + 1)) + this.MinCust;
            this.custPerHour[i] = Math.floor(perday/14);
          }
    //    console.log('perday',perday);
    },
    projectionSales: [],
    getCookiPerHour : function() {
        // console.log("befor");
        var total = 0 ;
        for (let i = 0; i < workHours.length; i++) {
            this.cookiPerHour[i] = Math.ceil(this.custPerHour[i] * this.AVG_Item_per_sale);
            total = total + this.cookiPerHour[i];
            this.projectionSales[i] = workHours[i] +" : "+ this.cookiPerHour[i] + " cookies";
        }
        this.projectionSales[14] = 'Total :' + total;
        // console.log("after");
     },
     render: function () {
        console.log('hi');
        var container = document.getElementById('mainDiv');
        // console.log(container);

        var articleE1 = document.createElement('article');
        container.appendChild(articleE1);

        var h2E1 = document.createElement('h2');
        articleE1.appendChild(h2E1);
        h2E1.textContent = 'Tokyo';

        var ulE1 = document.createElement('ul');
        articleE1.appendChild(ulE1);

        for (var i = 0; i < this.projectionSales.length; i++) {
            var liE = document.createElement('li');
            ulE1.appendChild(liE);
            liE.textContent = this.projectionSales[i];
        }
        console.log(document);
    }
};
Tokyo.getCustPerHour();
Tokyo.getCookiPerHour();
// console.log('customers ',seattle.custPerHour)
console.log('cookies ',Tokyo.projectionSales)
Tokyo.render();
/****************************************************************** */
var Dubai = {
    MinCust: 11,
    MaxCust: 38,
    AVG_Item_per_sale: 3.7,
    cookiPerHour : [] ,
    custPerHour : [] ,
    getCustPerHour : function() {
        for (var i = 0; i < workHours.length; i++) {
            var perday = Math.floor(Math.random() * (this.MaxCust - this.MinCust + 1)) + this.MinCust;
            this.custPerHour[i] = Math.floor(perday/14);
          }
    //    console.log('perday',perday);
    },
    projectionSales: [],
    getCookiPerHour : function() {
        // console.log("befor");
        var total = 0 ;
        for (let i = 0; i < workHours.length; i++) {
            this.cookiPerHour[i] = Math.ceil(this.custPerHour[i] * this.AVG_Item_per_sale);
            total = total + this.cookiPerHour[i];
            this.projectionSales[i] = workHours[i] +" : "+ this.cookiPerHour[i] + " cookies";
        }
        this.projectionSales[14] = 'Total :' + total;
        // console.log("after");
     },
     render: function () {
        console.log('hi');
        var container = document.getElementById('mainDiv');
        // console.log(container);

        var articleE1 = document.createElement('article');
        container.appendChild(articleE1);

        var h2E1 = document.createElement('h2');
        articleE1.appendChild(h2E1);
        h2E1.textContent = 'Dubai';

        var ulE1 = document.createElement('ul');
        articleE1.appendChild(ulE1);

        for (var i = 0; i < this.projectionSales.length; i++) {
            var liE = document.createElement('li');
            ulE1.appendChild(liE);
            liE.textContent = this.projectionSales[i];
        }
        console.log(document);
    }
};
Dubai.getCustPerHour();
Dubai.getCookiPerHour();
// console.log('customers ',seattle.custPerHour)
console.log('cookies ',Dubai.projectionSales)
Dubai.render();
/******************************************************************* */
var Paris = {
    MinCust: 20,
    MaxCust: 38,
    AVG_Item_per_sale: 2.3,
    cookiPerHour : [] ,
    custPerHour : [] ,
    getCustPerHour : function() {
        for (var i = 0; i < workHours.length; i++) {
            var perday = Math.floor(Math.random() * (this.MaxCust - this.MinCust + 1)) + this.MinCust;
            this.custPerHour[i] = Math.floor(perday/14);
          }
    //    console.log('perday',perday);
    },
    projectionSales: [],
    getCookiPerHour : function() {
        // console.log("befor");
        var total = 0 ;
        for (let i = 0; i < workHours.length; i++) {
            this.cookiPerHour[i] = Math.ceil(this.custPerHour[i] * this.AVG_Item_per_sale);
            total = total + this.cookiPerHour[i];
            this.projectionSales[i] = workHours[i] +" : "+ this.cookiPerHour[i] + " cookies";
        }
        this.projectionSales[14] = 'Total :' + total;
        // console.log("after");
     },
     render: function () {
        console.log('hi');
        var container = document.getElementById('mainDiv');
        // console.log(container);

        var articleE1 = document.createElement('article');
        container.appendChild(articleE1);

        var h2E1 = document.createElement('h2');
        articleE1.appendChild(h2E1);
        h2E1.textContent = 'Paris';

        var ulE1 = document.createElement('ul');
        articleE1.appendChild(ulE1);

        for (var i = 0; i < this.projectionSales.length; i++) {
            var liE = document.createElement('li');
            ulE1.appendChild(liE);
            liE.textContent = this.projectionSales[i];
        }
        console.log(document);
    }
};
Paris.getCustPerHour();
Paris.getCookiPerHour();
// console.log('customers ',seattle.custPerHour)
console.log('cookies ',Paris.projectionSales)
Paris.render();
/******************************************************************* */
var Lima = {
    MinCust: 2,
    MaxCust: 16,
    AVG_Item_per_sale: 4.6,
    cookiPerHour : [] ,
    custPerHour : [] ,
    getCustPerHour : function() {
        for (var i = 0; i < workHours.length; i++) {
            var perday = Math.floor(Math.random() * (this.MaxCust - this.MinCust + 1)) + this.MinCust;
            this.custPerHour[i] = Math.floor(perday/14);
          }
    //    console.log('perday',perday);
    },
    projectionSales: [],
    getCookiPerHour : function() {
        // console.log("befor");
        var total = 0 ;
        for (let i = 0; i < workHours.length; i++) {
            this.cookiPerHour[i] = Math.ceil(this.custPerHour[i] * this.AVG_Item_per_sale);
            total = total + this.cookiPerHour[i];
            this.projectionSales[i] = workHours[i] +" : "+ this.cookiPerHour[i] + " cookies";
        }
        this.projectionSales[14] = 'Total :' + total;
        // console.log("after");
     },
     render: function () {
        console.log('hi');
        var container = document.getElementById('mainDiv');
        // console.log(container);

        var articleE1 = document.createElement('article');
        container.appendChild(articleE1);

        var h2E1 = document.createElement('h2');
        articleE1.appendChild(h2E1);
        h2E1.textContent = 'Lima';

        var ulE1 = document.createElement('ul');
        articleE1.appendChild(ulE1);

        for (var i = 0; i < this.projectionSales.length; i++) {
            var liE = document.createElement('li');
            ulE1.appendChild(liE);
            liE.textContent = this.projectionSales[i];
        }
        console.log(document);
    }
};
Lima.getCustPerHour();
Lima.getCookiPerHour();
// console.log('customers ',seattle.custPerHour)
console.log('cookies ',Lima.projectionSales)
Lima.render();
