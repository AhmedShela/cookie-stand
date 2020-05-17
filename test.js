// problem domain: the Seattle Kitten Rescue has tons of kittens who
// need good homes. One of the best ways to reach prospective adoptive
// homes is to have profiles for each kitten available on a website.
// There are hundreds of kittens, though, and only a few volunteers;
// it's too time-consuming to hand-code each kitten's profile on their
// website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like (eg: cuddling, chasing string, napping, food)
// - an image
// good with kids
// good with dogs
// good with other cats
// breed (e.g: Egyptian Mau, Persian,British Shorthair)

// TODO: dynamically generate kitten objects using form data

//1 create object that will contain all properties and a method to getAge
var frankie = {
    name: 'Frankie',
    age: 0,
    likes: ['cuddling', 'napping', 'eating'],
    imagePath: '../images/frankie.jpeg',
    goodWithKids: true,
    goodWithDogs: false,
    goodWithOtherCats: true,
    breed: 'British',
    getAge: function (min, max) {
        this.age = getRandomAge(min, max);
        // this refers to the owner of the object
        // console.log(this);
    },
    render: function () {
        // console.log(document);
        var container = document.getElementById('kittenProfiles');
        // console.log(container);

        var articleE1 = document.createElement('article');
        container.appendChild(articleE1);

        var h2E1 = document.createElement('h2');
        articleE1.appendChild(h2E1);
        h2E1.textContent = this.name;

        var p2 = document.createElement('p');
        articleE1.appendChild(p2);
        p2.textContent = `${this.name} is adorable, and is ${this.age} months old`;

        var ulE1 = document.createElement('ul');
        articleE1.appendChild(ulE1);

        // ['cuddling','napping','eating']
        // var liE1 = document.createElement('li');
        // ulE1.appendChild(liE1);
        // liE1.textContent = frankie.likes[0];

        // var liE2 = document.createElement('li');
        // ulE1.appendChild(liE2);
        // liE2.textContent = frankie.likes[1];

        // var liE3 = document.createElement('li');
        // ulE1.appendChild(liE3);
        // liE3.textContent = frankie.likes[2];

        for (var i = 0; i < this.likes.length; i++) {
            var liE = document.createElement('li');
            ulE1.appendChild(liE);
            liE.textContent = this.likes[i];
        }

        var imgE1 = document.createElement('img');
        imgE1.setAttribute('src',this.imagePath);
        articleE1.appendChild(imgE1);
        console.log(document);

    }
}




//3 call getAge after creating the object to set the age property to the random age
// console.log(frankie);
frankie.getAge(1, 11);
console.log(frankie);
frankie.render();

//2 helper function to calculate random age within range
function getRandomAge(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// render function
// get (from the DOM) who the parent element is going to be.
// where am I attaching this new element ??
// create and append article to the container
// create h2 with frankie name as textContent and append it to the article
// create p with frankie age string and append it to article
// create ul and append it to article
// append li's to the ul containing frankie interests
// create image and set the src  attribute to frankie image path then append it to the article




mincust = 23;
maxCust = 65;
Avgcookies = 6.3;
// method -> return random number of customers per hour
//         -> result (will have random number of customer for each hour)