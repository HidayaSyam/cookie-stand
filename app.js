'use strict'

//-----------------------Array Hours
var hours =
    ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am',
        '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

function getRandomInt(minvalue, maxvalue) {
    var randomNum = Math.random();
    return Math.floor(randomNum * (maxvalue - minvalue + 1)) + minvalue;
}


var Seattle = {
    mincust: 23,
    maxcust: 65,
    location: 'Seattle',
    avgeslae: 6.3,
    arrcookies: [],
    numberOfcustomer: 0,
    getCookise: function () {
        //console.log(hours.length)
        for (var i = 0; i < hours.length; i++) {

            this.numberOfcustomer = getRandomInt(this.mincust, this.maxcust);
            console.log(this.numberOfcustomer);
            var numofcookies = Math.ceil(this.numberOfcustomer * this.avgeslae)
            this.arrcookies.push(numofcookies);
           

        }
    },
    getTotal: function ()
    {
        var sum=0;
        for (let i = 0; i < this.arrcookies.length; i++) {
            sum =sum+ this.arrcookies[i];
            
        }
        return sum;

    },

    render: function () {
        var parent = document.getElementById("Salmon");
        var artical=document.createElement('artical');
        parent.appendChild(artical);

        var h3= document.createElement('h3');
        h3.textContent=this.location;
        artical.appendChild(h3);

        var p= document.createElement('p');
        h3.appendChild(p);

        var ul=document.createElement('ul');
        p.appendChild(ul);

        for (let i = 0; i < this.arrcookies.length; i++) {
            var li=document.createElement('li');
            li.textContent=hours[i]+' : '+this.arrcookies[i];
            ul.appendChild(li);
            
        }
        var li1=document.createElement('li');
        li1.textContent='Totle : '+this.getTotal();
        ul.appendChild(li1);
    }

}
Seattle.getCookise();
Seattle.render();

var Tokyo = {
    mincust: 3,
    maxcust: 24,
    location: 'Tokyo',
    avgeslae: 1.2,
    arrcookies: [],
    numberOfcustomer: 0,
    getCookise: function () {
        //console.log(hours.length)
        for (var i = 0; i < hours.length; i++) {

            this.numberOfcustomer = getRandomInt(this.mincust, this.maxcust);
            console.log(this.numberOfcustomer);
            var numofcookies = Math.ceil(this.numberOfcustomer * this.avgeslae)
            this.arrcookies.push(numofcookies);
           

        }
    },
    getTotal: function ()
    {
        var sum=0;
        for (let i = 0; i < this.arrcookies.length; i++) {
            sum =sum+ this.arrcookies[i];
            
        }
        return sum;

    },

    render: function () {
        var parent = document.getElementById("Salmon");
        var artical=document.createElement('artical');
        parent.appendChild(artical);

        var h3= document.createElement('h3');
        h3.textContent=this.location;
        artical.appendChild(h3);

        var p= document.createElement('p');
        h3.appendChild(p);

        var ul=document.createElement('ul');
        p.appendChild(ul);

        for (let i = 0; i < this.arrcookies.length; i++) {
            var li=document.createElement('li');
            li.textContent=hours[i]+' : '+this.arrcookies[i];
            ul.appendChild(li);
            
        }
        var li1=document.createElement('li');
        li1.textContent='Totle : '+this.getTotal();
        ul.appendChild(li1);
    }


}
Tokyo.getCookise();
Tokyo.render();

var Dubai = {
    mincust: 11,
    maxcust: 38,
    location: 'Dubai',
    avgeslae: 3.7,
    arrcookies: [],
    numberOfcustomer: 0,
    getCookise: function () {
        //console.log(hours.length)
        for (var i = 0; i < hours.length; i++) {

            this.numberOfcustomer = getRandomInt(this.mincust, this.maxcust);
            console.log(this.numberOfcustomer);
            var numofcookies = Math.ceil(this.numberOfcustomer * this.avgeslae)
            this.arrcookies.push(numofcookies);
           

        }
    },
    getTotal: function ()
    {
        var sum=0;
        for (let i = 0; i < this.arrcookies.length; i++) {
            sum =sum+ this.arrcookies[i];
            
        }
        return sum;

    },

    render: function () {
        var parent = document.getElementById("Salmon");
        var artical=document.createElement('artical');
        parent.appendChild(artical);

        var h3= document.createElement('h3');
        h3.textContent=this.location;
        artical.appendChild(h3);

        var p= document.createElement('p');
        h3.appendChild(p);

        var ul=document.createElement('ul');
        p.appendChild(ul);

        for (let i = 0; i < this.arrcookies.length; i++) {
            var li=document.createElement('li');
            li.textContent=hours[i]+' : '+this.arrcookies[i];
            ul.appendChild(li);
            
        }
        var li1=document.createElement('li');
        li1.textContent='Totle : '+this.getTotal();
        ul.appendChild(li1);
    }


}
Dubai.getCookise();
Dubai.render();

var Paris = {
    mincust: 20,
    maxcust: 38,
    location: 'Paris',
    avgeslae: 2.3,
    arrcookies: [],
    numberOfcustomer: 0,
    getCookise: function () {
        //console.log(hours.length)
        for (var i = 0; i < hours.length; i++) {

            this.numberOfcustomer = getRandomInt(this.mincust, this.maxcust);
            console.log(this.numberOfcustomer);
            var numofcookies = Math.ceil(this.numberOfcustomer * this.avgeslae)
            this.arrcookies.push(numofcookies);
           

        }
    },
    getTotal: function ()
    {
        var sum=0;
        for (let i = 0; i < this.arrcookies.length; i++) {
            sum =sum+ this.arrcookies[i];
            
        }
        return sum;

    },

    render: function () {
        var parent = document.getElementById("Salmon");
        var artical=document.createElement('artical');
        parent.appendChild(artical);

        var h3= document.createElement('h3');
        h3.textContent=this.location;
        artical.appendChild(h3);

        var p= document.createElement('p');
        h3.appendChild(p);

        var ul=document.createElement('ul');
        p.appendChild(ul);

        for (let i = 0; i < this.arrcookies.length; i++) {
            var li=document.createElement('li');
            li.textContent=hours[i]+' : '+this.arrcookies[i];
            ul.appendChild(li);
            
        }
        var li1=document.createElement('li');
        li1.textContent='Totle : '+this.getTotal();
        ul.appendChild(li1);
    }


}
Paris.getCookise();
Paris.render();
var Lima = {
    mincust: 2,
    maxcust: 16,
    location: 'Lima',
    avgeslae: 4.6,
    arrcookies: [],
    numberOfcustomer: 0,
    getCookise: function () {
        //console.log(hours.length)
        for (var i = 0; i < hours.length; i++) {

            this.numberOfcustomer = getRandomInt(this.mincust, this.maxcust);
            console.log(this.numberOfcustomer);
            var numofcookies = Math.ceil(this.numberOfcustomer * this.avgeslae)
            this.arrcookies.push(numofcookies);
           

        }
    },
    getTotal: function ()
    {
        var sum=0;
        for (let i = 0; i < this.arrcookies.length; i++) {
            sum =sum+ this.arrcookies[i];
            
        }
        return sum;

    },

    render: function () {
        var parent = document.getElementById("Salmon");
        var artical=document.createElement('artical');
        parent.appendChild(artical);

        var h3= document.createElement('h3');
        h3.textContent=this.location;
        artical.appendChild(h3);

        var p= document.createElement('p');
        h3.appendChild(p);

        var ul=document.createElement('ul');
        p.appendChild(ul);

        for (let i = 0; i < this.arrcookies.length; i++) {
            var li=document.createElement('li');
            li.textContent=hours[i]+' : '+this.arrcookies[i];
            ul.appendChild(li);
            
        }
        var li1=document.createElement('li');
        li1.textContent='Totle : '+this.getTotal();
        ul.appendChild(li1);
    }


}
Lima.getCookise();
Lima.render();