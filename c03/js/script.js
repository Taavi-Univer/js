// const hotel = {
//   name: "Hotel Name",
//   rooms: 60,
//   booked: 26,
//   availability: function () {
//     return this.rooms - this.booked;
//   },
// };

// const hotelName = document.getElementById("hotelName");
// hotelName.textContent = hotel.name;

// const availability = document.getElementById("availability");
// availability.textContent = hotel.availability();

// -------------------------------------------------
// object constructor function
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function () {
    return this.rooms - this.booked;
  };
}

let seaHotel = new Hotel("Sea", 300, 30);
let waterfallHotel = new Hotel("Waterfall", 100, 60);

let details1 = seaHotel.name + " rooms: ";
details1 += seaHotel.checkAvailability();
const SeaHotel = document.getElementById("sea");
SeaHotel.textContent = details1;

let details2 = waterfallHotel.name + " rooms: ";
details2 += waterfallHotel.checkAvailability();
const WaterfallHotel = document.getElementById("waterfall");
WaterfallHotel.textContent = details2;

seaHotel.gym = true;
seaHotel.pool = false;
waterfallHotel.gym = false;
waterfallHotel.pool = false;

const sgym_isAvailable = document.getElementById("sgym_isAvailable");
sgym_isAvailable.textContent = seaHotel.gym ? "OK" : "No";
const spool_isAvailable = document.getElementById("spool_isAvailable");
spool_isAvailable.textContent = seaHotel.pool ? "OK" : "No";

const wgym_isAvailable = document.getElementById("wgym_isAvailable");
wgym_isAvailable.textContent = waterfallHotel.gym ? "OK" : "No";
const wpool_isAvailable = document.getElementById("wpool_isAvailable");
wpool_isAvailable.textContent = waterfallHotel.pool ? "OK" : "No";
