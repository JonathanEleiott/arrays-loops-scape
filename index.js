// const carrots = `carrots`;
// const cucumbers = `cucumbers`;
// const tomatoes = `tomatoes`;
// const beets = `beets`;

const garden = [`carrots`, `cucumbers`, `tomatoes`, `beets`];
console.log(`STARTING GARDEN`, garden);

garden.shift();
console.log(`REMOVE FIRST ITEM`, garden);

const beets = garden.pop();
// console.log(`WHAT HAS BEEN POPPED?`, beets);
console.log(`REMOVED LAST ELEMENT`, garden);

const gardenLength = garden.push(`limes`);
// console.log(`GARDEN LENGTH`, gardenLength);
console.log(`ADDED LIMES`, garden);

garden.push(`lemons`);
console.log(`ADDED LEMONS`, garden);

garden.unshift(`potatoes`);
console.log(`ADD POTATOES`, garden);

garden.splice(1, 1, 'serrano peppers');
console.log(`SPLICE OUT CUCUMBERS AND ADD PEPPERS`,  garden);

garden.splice(3, 0, `onions`);
console.log(`ADDED ONIONS`, garden);

garden.splice(2, 2, `celeries`, `broccoli`);
console.log(`REMOVE TOMATOES AND ONIONS, ADDED CELERY AND BROCCOLI`, garden);

const trees = garden.slice(3);
console.log(`TREES`, trees);

const favItems = garden.slice(1, 4);
console.log(`FAV ITEMS`,  favItems);

console.log(`GARDEN`, garden);
console.log(`GARDEN LENGTH`, garden.length);



//      initialization  ;   condition (to keep going) ;         afterthought
for(let indexCounter = 0; indexCounter < garden.length; indexCounter = indexCounter + 1) {
  console.log(`ITEM IN GARDEN`, garden[indexCounter]);
  garden[indexCounter] = `${garden[indexCounter]} are awesome! `
}

console.log(`GARDEN AFTER FOR LOOP`, garden);


let countDownNumber = 10;

while(countDownNumber > 0) {
  console.log(countDownNumber);

  countDownNumber = countDownNumber - 1;
}

console.log(`Blast off!!!!`);


// indexCounter -> 3
// garden.length -> 6


const children = [`Sally 12`, `Billy 12`, `Laura 12`];

const addChild = (classroom, name) => {
  const roomNumber = 12;
  classroom.push(`${name} ${roomNumber}`);
}

const addLisa = (childList) => {
  const lastName = `Flannigan`;
  
  if(true) {
    const name = `Lisa ${lastName}`;
    addChild(childList, name);
  }
}

if(true) {
  const randomNumber = 767;

  console.log(randomNumber);
}

addChild(children, `Ken`);
addLisa(children);

console.log(children);




const x = 10;


const myFunc = () => {
  const x = 12;

  if(true) {
    const x = 5;
  }

  console.log(x);
}

myFunc();






