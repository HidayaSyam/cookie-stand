'use strict'

'use strict'

//-----------------------Array Hours
var hours =
    ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am',
        '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm',
        '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

function getRandomInt(minvalue, maxvalue) {
    var randomNum = Math.random();
    return Math.floor(randomNum * (maxvalue - minvalue + 1)) + minvalue;
}

var arrLocation = [];
function Location(mincust, maxcust, location, avgesale) {
    this.mincust = mincust;
    this.maxcust = maxcust;
    this.location = location;
    this.avgesale = avgesale;
    this.arrcookiesperhour = [];
    this.TotalperDay = 0;
    this.numberOfcustomerPerHour = []
    arrLocation.push(this);
    //console.log(this.avgesale);

}

Location.prototype.getCookise = function () {
    //console.log(this.avgesale);
    for (var i = 0; i < hours.length; i++) {

        var numberOfcustomer = getRandomInt(this.mincust, this.maxcust);
        //console.log(this.avgesale);
        this.numberOfcustomerPerHour.push(numberOfcustomer);
        // console.log(this.numberOfcustomerPerHour[i]);
        var numofcookies = Math.ceil(this.numberOfcustomerPerHour[i] * this.avgesale);
        this.arrcookiesperhour.push(numofcookies);
        // console.log(numofcookies);

    }

}

Location.prototype.getTotal = function () {
    var sum = 0;
    for (let i = 0; i < this.arrcookiesperhour.length; i++) {
        sum = sum + this.arrcookiesperhour[i];
    }
    return sum;

}

var parent = document.getElementById('par');
var table = document.createElement('table');
parent.appendChild(table);
//---------------------------------------------------------------------------
function HeaderTable() {

    var tr = document.createElement('tr');
    var th = document.createElement('th');
    th.textContent = 'Location' + ' ';
    tr.appendChild(th);

    for (let i = 0; i < hours.length; i++) {

        var th1 = document.createElement('th');
        th1.textContent = hours[i] + ' ';
        tr.appendChild(th1);



    }
    //var tr = document.createElement('tr');
    var th1 = document.createElement('th');
    th1.textContent = 'Daily Location Total' + ' ';
    tr.appendChild(th1);



    table.appendChild(tr);

    parent.appendChild(table);

}
//----------------------------------------------------------------------------------
function FooterTable() {

    var tr = document.createElement('tr');
    var th = document.createElement('th');
    th.textContent = 'Total' + ' ';
    tr.appendChild(th);
    var total = 0;
    for (let i = 0; i < hours.length; i++) {
        var sum = 0;
        var th1 = document.createElement('th');
        for (var j = 0; j < arrLocation.length; j++) {


            sum = sum + arrLocation[j].arrcookiesperhour[i];

        }
        total = total + sum;
        th1.textContent = sum;
        tr.appendChild(th1);


    }
    //var tr = document.createElement('tr');
    var th1 = document.createElement('th');
    th1.textContent = total;
    tr.appendChild(th1);



    table.appendChild(tr);

    parent.appendChild(table);

}
//----------------------------------------------------------------------------------
Location.prototype.render = function () {
    var tr1 = document.createElement('tr');
    var th1 = document.createElement('th');
    th1.textContent = this.location + ' ';
    tr1.appendChild(th1);


    for (let i = 0; i < hours.length; i++) {

        var th1 = document.createElement('th');
        th1.textContent = this.arrcookiesperhour[i] + ' ';
        tr1.appendChild(th1);
        //console.log(this.arrcookiesperhour[i])


    }
    var Total = document.createElement('td');
    Total.textContent = this.getTotal();
    tr1.appendChild(Total);


    table.appendChild(tr1);

    parent.appendChild(table);
}

//var locationform = document.getElementById("Location-form");



function addshops(event) {
    event.preventDefault();
    var loc = event.target.locationname.value;
    console.log(loc);
    var min = event.target.mincust.value;
    console.log(min);
    var max = event.target.maxcust.value;
    console.log(max);
    var avg = event.target.avgsale.value;
    console.log(avg);
    var c= new Location(min,max,loc,avg);
    HeaderTable();
    Seattle.getCookise();
    Seattle.render();
    for (let i = 0; i < arrLocation.length; i++) {
        arrLocation[i].getCookise();
        arrLocation[i].render();
    }
    FooterTable();


}
var locationform = document.getElementById("Location-form");
locationform.addEventListener('submit', addshops);
//-----------------------------------------------------------------------------------------
var Seattle = new Location(23, 65, 'Seattle', 6.3);
var Tokyo = new Location(23, 65, 'Tokyo', 6.3);
var Dubai = new Location(23, 65, 'Dubai', 6.3);
var Paris = new Location(23, 65, 'Paris', 6.3);
var Lima = new Location(23, 65, 'Lima', 6.3);

//---------------------------------------------



// //-----------------------Array Hours
// var hours =
//     ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am',
//         '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

// function getRandomInt(minvalue, maxvalue) {
//     var randomNum = Math.random();
//     return Math.floor(randomNum * (maxvalue - minvalue + 1)) + minvalue;
// }
// /

// var Seattle = {
//     mincust: 23,
//     maxcust: 65,
//     location: 'Seattle',
//     avgeslae: 6.3,
//     arrcookies: [],
//     numberOfcustomer: 0,
//     getCookise: function () {
//         //console.log(hours.length)
//         for (var i = 0; i < hours.length; i++) {

//             this.numberOfcustomer = getRandomInt(this.mincust, this.maxcust);
//             console.log(this.numberOfcustomer);
//             var numofcookies = Math.ceil(this.numberOfcustomer * this.avgeslae)
//             this.arrcookies.push(numofcookies);


//         }
//     },
//     getTotal: function ()
//     {
//         var sum=0;
//         for (let i = 0; i < this.arrcookies.length; i++) {
//             sum =sum+ this.arrcookies[i];

//         }
//         return sum;

//     },

//     render: function () {
//         var parent = document.getElementById("Salmon");
//         var artical=document.createElement('artical');
//         parent.appendChild(artical);

//         var h3= document.createElement('h3');
//         h3.textContent=this.location;
//         artical.appendChild(h3);

//         var p= document.createElement('p');
//         h3.appendChild(p);

//         var ul=document.createElement('ul');
//         p.appendChild(ul);

//         for (let i = 0; i < this.arrcookies.length; i++) {
//             var li=document.createElement('li');
//             li.textContent=hours[i]+' : '+this.arrcookies[i];
//             ul.appendChild(li);

//         }
//         var li1=document.createElement('li');
//         li1.textContent='Totle : '+this.getTotal();
//         ul.appendChild(li1);
//     }

// }
// Seattle.getCookise();
// Seattle.render();

// var Tokyo = {
//     mincust: 3,
//     maxcust: 24,
//     location: 'Tokyo',
//     avgeslae: 1.2,
//     arrcookies: [],
//     numberOfcustomer: 0,
//     getCookise: function () {
//         //console.log(hours.length)
//         for (var i = 0; i < hours.length; i++) {

//             this.numberOfcustomer = getRandomInt(this.mincust, this.maxcust);
//             console.log(this.numberOfcustomer);
//             var numofcookies = Math.ceil(this.numberOfcustomer * this.avgeslae)
//             this.arrcookies.push(numofcookies);


//         }
//     },
//     getTotal: function ()
//     {
//         var sum=0;
//         for (let i = 0; i < this.arrcookies.length; i++) {
//             sum =sum+ this.arrcookies[i];

//         }
//         return sum;

//     },

//     render: function () {
//         var parent = document.getElementById("Salmon");
//         var artical=document.createElement('artical');
//         parent.appendChild(artical);

//         var h3= document.createElement('h3');
//         h3.textContent=this.location;
//         artical.appendChild(h3);

//         var p= document.createElement('p');
//         h3.appendChild(p);

//         var ul=document.createElement('ul');
//         p.appendChild(ul);

//         for (let i = 0; i < this.arrcookies.length; i++) {
//             var li=document.createElement('li');
//             li.textContent=hours[i]+' : '+this.arrcookies[i];
//             ul.appendChild(li);

//         }
//         var li1=document.createElement('li');
//         li1.textContent='Totle : '+this.getTotal();
//         ul.appendChild(li1);
//     }


// }
// Tokyo.getCookise();
// Tokyo.render();

// var Dubai = {
//     mincust: 11,
//     maxcust: 38,
//     location: 'Dubai',
//     avgeslae: 3.7,
//     arrcookies: [],
//     numberOfcustomer: 0,
//     getCookise: function () {
//         //console.log(hours.length)
//         for (var i = 0; i < hours.length; i++) {

//             this.numberOfcustomer = getRandomInt(this.mincust, this.maxcust);
//             console.log(this.numberOfcustomer);
//             var numofcookies = Math.ceil(this.numberOfcustomer * this.avgeslae)
//             this.arrcookies.push(numofcookies);


//         }
//     },
//     getTotal: function ()
//     {
//         var sum=0;
//         for (let i = 0; i < this.arrcookies.length; i++) {
//             sum =sum+ this.arrcookies[i];

//         }
//         return sum;

//     },

//     render: function () {
//         var parent = document.getElementById("Salmon");
//         var artical=document.createElement('artical');
//         parent.appendChild(artical);

//         var h3= document.createElement('h3');
//         h3.textContent=this.location;
//         artical.appendChild(h3);

//         var p= document.createElement('p');
//         h3.appendChild(p);

//         var ul=document.createElement('ul');
//         p.appendChild(ul);

//         for (let i = 0; i < this.arrcookies.length; i++) {
//             var li=document.createElement('li');
//             li.textContent=hours[i]+' : '+this.arrcookies[i];
//             ul.appendChild(li);

//         }
//         var li1=document.createElement('li');
//         li1.textContent='Totle : '+this.getTotal();
//         ul.appendChild(li1);
//     }


// }
// Dubai.getCookise();
// Dubai.render();

// var Paris = {
//     mincust: 20,
//     maxcust: 38,
//     location: 'Paris',
//     avgeslae: 2.3,
//     arrcookies: [],
//     numberOfcustomer: 0,
//     getCookise: function () {
//         //console.log(hours.length)
//         for (var i = 0; i < hours.length; i++) {

//             this.numberOfcustomer = getRandomInt(this.mincust, this.maxcust);
//             console.log(this.numberOfcustomer);
//             var numofcookies = Math.ceil(this.numberOfcustomer * this.avgeslae)
//             this.arrcookies.push(numofcookies);


//         }
//     },
//     getTotal: function ()
//     {
//         var sum=0;
//         for (let i = 0; i < this.arrcookies.length; i++) {
//             sum =sum+ this.arrcookies[i];

//         }
//         return sum;

//     },

//     render: function () {
//         var parent = document.getElementById("Salmon");
//         var artical=document.createElement('artical');
//         parent.appendChild(artical);

//         var h3= document.createElement('h3');
//         h3.textContent=this.location;
//         artical.appendChild(h3);

//         var p= document.createElement('p');
//         h3.appendChild(p);

//         var ul=document.createElement('ul');
//         p.appendChild(ul);

//         for (let i = 0; i < this.arrcookies.length; i++) {
//             var li=document.createElement('li');
//             li.textContent=hours[i]+' : '+this.arrcookies[i];
//             ul.appendChild(li);

//         }
//         var li1=document.createElement('li');
//         li1.textContent='Totle : '+this.getTotal();
//         ul.appendChild(li1);
//     }


// }
// Paris.getCookise();
// Paris.render();
// var Lima = {
//     mincust: 2,
//     maxcust: 16,
//     location: 'Lima',
//     avgeslae: 4.6,
//     arrcookies: [],
//     numberOfcustomer: 0,
//     getCookise: function () {
//         //console.log(hours.length)
//         for (var i = 0; i < hours.length; i++) {

//             this.numberOfcustomer = getRandomInt(this.mincust, this.maxcust);
//             console.log(this.numberOfcustomer);
//             var numofcookies = Math.ceil(this.numberOfcustomer * this.avgeslae)
//             this.arrcookies.push(numofcookies);


//         }
//     },
//     getTotal: function ()
//     {
//         var sum=0;
//         for (let i = 0; i < this.arrcookies.length; i++) {
//             sum =sum+ this.arrcookies[i];

//         }
//         return sum;

//     },

//     render: function () {
//         var parent = document.getElementById("Salmon");
//         var artical=document.createElement('artical');
//         parent.appendChild(artical);

//         var h3= document.createElement('h3');
//         h3.textContent=this.location;
//         artical.appendChild(h3);

//         var p= document.createElement('p');
//         h3.appendChild(p);

//         var ul=document.createElement('ul');
//         p.appendChild(ul);

//         for (let i = 0; i < this.arrcookies.length; i++) {
//             var li=document.createElement('li');
//             li.textContent=hours[i]+' : '+this.arrcookies[i];
//             ul.appendChild(li);

//         }
//         var li1=document.createElement('li');
//         li1.textContent='Totle : '+this.getTotal();
//         ul.appendChild(li1);
//     }


// }
// Lima.getCookise();
// Lima.render();