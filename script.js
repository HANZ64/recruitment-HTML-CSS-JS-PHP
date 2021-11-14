/* Part B: PHP + JavaScript

    -Use PHP to process the supplied serialised data (front-end_data.txt) into a JSON format that can be consumed by JavaScript.
    
    -Use JavaScript to display the details of each card, including:
      Name
      Description
      Time Alive
      Technology
      Strength
      Special Powers
      Loyalty
    
    -Format the DOB from the data to determine how long they have been alive using days, weeks, months and years.
    
    -Retrieve the formatted data using JavaScript
    
    -Display the formatted data in the HTML + CSS layout created in step A, sticking to the design, placing data where it fits.
    
    -You are free to use any framework you wish or do it VanillaJS style
*/

/* === Name Title Variables ==================================== */
const davesTitle = document.querySelector(".dave-green.title-name");
const nicksTitle = document.querySelector(".nick-red.title-name");
const craigsTitle = document.querySelector(".craig-orange.title-name");
const geoffsTitle = document.querySelector(".geoff-pink.title-name");
const brentonsTitle = document.querySelector(".brenton-green.title-name");

// Set Name Titles
davesTitle.innerHTML = `<span>${data[0].name}</span>`;
nicksTitle.innerHTML = `<span>${data[1].name}</span>`;
craigsTitle.innerHTML = `<span>${data[3].name}</span>`;
geoffsTitle.innerHTML = `<span>${data[4].name}</span>`;
brentonsTitle.innerHTML = `<span>${data[2].name}</span>`;


/* === Description Variables ==================================== */
const davesDescription = document.querySelector(".daves-card.description span");
const nicksDescription = document.querySelector(".nicks-card.description span");
const craigsDescription = document.querySelector(".craigs-card.description span");
const geoffsDescription = document.querySelector(".geoffs-card.description span");
const brentonsDescription = document.querySelector(".brentons-card.description span");

// Set Description
davesDescription.textContent = "Manages all aspects of Web Design and Software Development, whilst keeping abreast of the latest technologies and techniques";
nicksDescription.textContent = "The multi-talented Nick creates and performs Reggae Dub under the name of Dutty Hands and has a loyal following on SoundCloud and Spotify";
craigsDescription.textContent = "He really enjoys solving those tricky development problems, and he puts his robotic brain chock-full of database & coding knowledge to good use";
geoffsDescription.textContent = "Geoff overseas the day-to-day running of the business, as well as getting his hands dirty on the systems analysis and interface design of our varied projects.";
brentonsDescription.textContent = "Brenton has built up a 20 year portfolio, sharpening his knowledge along the way and adding a wide range of projects for both print & web to his creative bow.";


/* === Attribute Variables ==================================== */
const timeAliveAttributes = document.querySelectorAll(".daves-card.attribute.grid-1, .nicks-card.attribute.grid-1, .craigs-card.attribute.grid-1, .geoffs-card.attribute.grid-1, .brentons-card.attribute.grid-1");
const technologyAttributes = document.querySelectorAll(".daves-card.attribute.grid-2, .nicks-card.attribute.grid-2, .craigs-card.attribute.grid-2, .geoffs-card.attribute.grid-2, .brentons-card.attribute.grid-2");
const strengthAttributes = document.querySelectorAll(".daves-card.attribute.grid-3, .nicks-card.attribute.grid-3, .craigs-card.attribute.grid-3, .geoffs-card.attribute.grid-3, .brentons-card.attribute.grid-3");
const specialPowerAttributes = document.querySelectorAll(".daves-card.attribute.grid-4, .nicks-card.attribute.grid-4, .craigs-card.attribute.grid-4, .geoffs-card.attribute.grid-4, .brentons-card.attribute.grid-4");
const loyaltyAttributes = document.querySelectorAll(".daves-card.attribute.grid-5, .nicks-card.attribute.grid-5, .craigs-card.attribute.grid-5, .geoffs-card.attribute.grid-5, .brentons-card.attribute.grid-5");

// Sets attributes for all cards when called
function setAttribute(query, text) {
  query.forEach((title) => {
    title.textContent = text;
  });
}

// Set Attributes
setAttribute(timeAliveAttributes, "Time Alive ...");
setAttribute(technologyAttributes, "Technology ...");
setAttribute(strengthAttributes, "Strength...");
setAttribute(specialPowerAttributes, "Special Powers ...");
setAttribute(loyaltyAttributes, "Loyalty ...");


/* === Technology Variables ==================================== */
const davesTechnology = document.querySelector(".daves-card.value.grid-7 span");
const nicksTechnology = document.querySelector(".nicks-card.value.grid-7 span");
const craigsTechnology = document.querySelector(".craigs-card.value.grid-7 span");
const geoffsTechnology = document.querySelector(".geoffs-card.value.grid-7 span");
const brentonsTechnology = document.querySelector(".brentons-card.value.grid-7 span");

// Set Technology Values
davesTechnology.textContent = data[0].stats.technology;
nicksTechnology.textContent = data[1].stats.technology;
craigsTechnology.textContent = data[3].stats.technology;
geoffsTechnology.textContent = data[4].stats.technology;
brentonsTechnology.textContent = data[2].stats.technology;


/* === Strength Variables ==================================== */
const davesStrength = document.querySelector(".daves-card.value.grid-8 span");
const nicksStrength = document.querySelector(".nicks-card.value.grid-8 span");
const craigsStrength = document.querySelector(".craigs-card.value.grid-8 span");
const geoffsStrength = document.querySelector(".geoffs-card.value.grid-8 span");
const brentonsStrength = document.querySelector(".brentons-card.value.grid-8 span");

// Set Strength Values
davesStrength.textContent = data[0].stats.strength;
nicksStrength.textContent = data[1].stats.strength;
craigsStrength.textContent = data[3].stats.strength;
geoffsStrength.textContent = data[4].stats.strength;
brentonsStrength.textContent = data[2].stats.strength;


/* === Special Power Variables ==================================== */
const davesSpecialPower = document.querySelector(".daves-card.value.grid-9 span");
const nicksSpecialPower = document.querySelector(".nicks-card.value.grid-9 span");
const craigsSpecialPower = document.querySelector(".craigs-card.value.grid-9 span");
const geoffsSpecialPower = document.querySelector(".geoffs-card.value.grid-9 span");
const brentonsSpecialPower = document.querySelector(".brentons-card.value.grid-9 span");

// Set Special Power Values
davesSpecialPower.textContent = data[0].stats.special_powers;
nicksSpecialPower.textContent = data[1].stats.special_powers;
craigsSpecialPower.textContent = data[3].stats.special_powers;
geoffsSpecialPower.textContent = data[4].stats.special_powers;
brentonsSpecialPower.textContent = data[2].stats.special_powers;


/* === Loyalty Variables ==================================== */
const davesLoyalty = document.querySelector(".daves-card.value.grid-10 span");
const nicksLoyalty = document.querySelector(".nicks-card.value.grid-10 span");
const craigsLoyalty = document.querySelector(".craigs-card.value.grid-10 span");
const geoffsLoyalty = document.querySelector(".geoffs-card.value.grid-10 span");
const brentonsLoyalty = document.querySelector(".brentons-card.value.grid-10 span");

// Set Loyalty Values
davesLoyalty.textContent = data[0].stats.loyalty;
nicksLoyalty.textContent = data[1].stats.loyalty;
craigsLoyalty.textContent = data[3].stats.loyalty;
geoffsLoyalty.textContent = data[4].stats.loyalty;
brentonsLoyalty.textContent = data[2].stats.loyalty;


/* === DOB Variables ==================================== */
const davesTimeAlive = document.querySelector(".daves-card.value.grid-6 span");
const davesYear = data[0].dob.slice(6, 11);
const davesMonth = data[0].dob.slice(3, 5);
const davesDate = data[0].dob.slice(0, 2);

const nicksTimeAlive = document.querySelector(".nicks-card.value.grid-6 span");
const nicksYear = data[1].dob.slice(6, 11);
const nicksMonth = data[1].dob.slice(3, 5);
const nicksDate = data[1].dob.slice(0, 2);

const craigsTimeAlive = document.querySelector(".craigs-card.value.grid-6 span");
const craigsYear = data[3].dob.slice(6, 11);
const craigsMonth = data[3].dob.slice(3, 5);
const craigsDate = data[3].dob.slice(0, 2);

const geoffsTimeAlive = document.querySelector(".geoffs-card.value.grid-6 span");
const geoffsYear = data[4].dob.slice(6, 11);
const geoffsMonth = data[4].dob.slice(3, 5);
const geoffsDate = data[4].dob.slice(0, 2);

const brentonsTimeAlive = document.querySelector(".brentons-card.value.grid-6 span");
const brentonsYear = data[2].dob.slice(6, 11);
const brentonsMonth = data[2].dob.slice(3, 5);
const brentonsDate = data[2].dob.slice(0, 2);

/* 
This function calculates & returns the difference between the current date & the users dob.
Thanks to the moment.js library, it accurately accounts for the different number of days in each month (and even handles leap years).
*/
function getTimeAlive(year, month, day) {
  const now = moment();
  const dob = moment([year, month - 1, day]); // [year, month[0 indexed], day]

  const years = now.diff(dob, "year");
  dob.add(years, "years");

  const months = now.diff(dob, "months");
  dob.add(months, "months");

  const days = now.diff(dob, "days");

  return [years, months, days];
}

// Set Time Alive Values
const [daveYearsAlive, daveMonthsAlive, daveDaysAlive] = getTimeAlive(davesYear, davesMonth, davesDate);
davesTimeAlive.textContent = `${daveYearsAlive}Y ${daveMonthsAlive}M ${daveDaysAlive}D`;

const [nicksYearsAlive, nicksMonthsAlive, nicksDaysAlive] = getTimeAlive(nicksYear, nicksMonth, nicksDate);
nicksTimeAlive.textContent = `${nicksYearsAlive}Y ${nicksMonthsAlive}M ${nicksDaysAlive}D`;

const [craigsYearsAlive, craigsMonthsAlive, craigsDaysAlive] = getTimeAlive(craigsYear, craigsMonth, craigsDate);
craigsTimeAlive.textContent = `${craigsYearsAlive}Y ${craigsMonthsAlive}M ${craigsDaysAlive}D`;

const [geoffsYearsAlive, geoffsMonthsAlive, geoffsDaysAlive] = getTimeAlive(geoffsYear, geoffsMonth, geoffsDate);
geoffsTimeAlive.textContent = `${geoffsYearsAlive}Y ${geoffsMonthsAlive}M ${geoffsDaysAlive}D`;

const [brentonsYearsAlive, brentonsMonthsAlive, brentonsDaysAlive] = getTimeAlive(brentonsYear, brentonsMonth, brentonsDate);
brentonsTimeAlive.textContent = `${brentonsYearsAlive}Y ${brentonsMonthsAlive}M ${brentonsDaysAlive}D`;

// Styling edge case adjust
if (davesTimeAlive.textContent.length > 10) davesTimeAlive.style.left = "1px";
if (craigsTimeAlive.textContent.length > 10) craigsTimeAlive.style.left = "1px";
if (geoffsTimeAlive.textContent.length > 10) geoffsTimeAlive.style.left = "1px";
if (brentonsTimeAlive.textContent.length > 10) brentonsTimeAlive.style.left = "1px";

// For reference
console.log("front-end_data.txt:", data);
