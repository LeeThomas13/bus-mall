'use strict'

var prodArr = [];
var uniqueProdArr = [];
parent = document.getElementById('productTest')

function Products (name) {
  this.imgName=name;
  this.filepath=`../images/${name}`;
  prodArr.push(this);
}

new Products ('bag.jpg');
new Products ('banana.jpg');
new Products ('bathroom.jpg');
new Products ('boots.jpg');
new Products ('breakfast.jpg');
new Products ('bubblegum.jpg');
new Products ('chair.jpg');
new Products ('cthulhu.jpg');
new Products ('dog-duck.jpg');
new Products ('dragon.jpg');
new Products ('pen,jpg');
new Products ('pet-sweep.jpg');
new Products ('scissors.jpg');
new Products ('shark.jpg');
new Products ('sweep.png');
new Products ('tauntaun.jpg');
new Products ('unicorn,jpg');
new Products ('usb.gif');
new Products ('water-can.jpg');
new Products ('wine-glass.jpg');
console.log(prodArr)

function getRandomImage(){
  var randomImage = getRandomNumber(prodArr.length);
  while(uniqueProdArr.includes(randomImage)){
    randomImage = getRandomNumber(prodArr.length)
  }
  uniqueProdArr.push(randomImage);
  if(uniqueProdArr>6){
    uniqueProdArr.shift();
  }
  printImage(randomImage)
}

function printImage(randomImage){
  var image = document.createElement('img');
  image.setAttribute('src', randomImage.filepath);
  image.setAttribute('alt', randomImage.name);
  image.setAttribute('title', randomImage.name);
  parent.appendChild(image)
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

getRandomImage()
printImage()

