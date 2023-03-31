// activate airtable object
var Airtable = require("airtable");

var base = new Airtable({ apiKey: "keyzCVBoGFYt3SVJh" }).base(
  "appuBBpW92U6TCJ3x"
);

function filterItems(type, filter) {
  let allItems = Array.from(document.querySelectorAll('grid'));

  let filteredItems = allItems.filter((item) => item.dataset[type] == filter);

  console.log(filteredItems);
}

base("Table 1")
  .select({
    maxRecords: 50,
    // view: "Grid view",
  })
  .eachPage(function page(items) {
    console.log("items:", items);
    items.forEach(function (item) {

      let airtableItems = document.querySelector(".grid");

      // pull my airtable data
      // each record will have its own div
      let airtableItem = document.createElement("div");
      // add some data specific meta to my new divs for filtering
      airtableItem.classList.add("airtable-item");
      airtableItem.setAttribute("data-edibility", item.fields.edibility);

      // create a img tag for my album art
      let itemImage = document.createElement("img");
      if (item.fields.photo && item.fields.photo.length > 0) {
        itemImage.src = item.fields.photo[0].url;
      }
      // create a span for my artist name
      let itemName = document.createElement("h2");
      if (item.fields.nickname) {
        itemName.innerHTML = item.fields.nickname;
      }

      let itemTitle = document.createElement("h3");
      if (item.fields.name) {
        itemTitle.innerHTML = item.fields.name;
      }

      let itemFamily = document.createElement("h3");
      if (item.fields.family) {
        itemFamily.innerHTML = item.fields.family;
      }

      // appending to div holding each airtable record
      airtableItem.append(itemImage);
      airtableItem.append(itemName);
      airtableItem.append(itemTitle);
      airtableItem.append(itemFamily);
      // append div to body
      document.body.append(airtableItem);
    });
  });

// set up an event listener for my edible filter button
// listen for user click, once it is clicked, search for divs with data-edibility = "Edible"

// get our button using css ID
// assign an event listener to my button to listen for click
let edibleFilterBtn = document.getElementById("Edible");
edibleFilterBtn.addEventListener("click", function (event) {
  console.log("edible filter being pressed:", event.target.id);
  // search my airtable-item divs, and see which data-edibility equals "Edible"
  // put my airtable-divs in an array [airtable-div 1, airtable-div-2], find the div that has data-edibility
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");

  // search for data-edibility equal to "Edible"
  listofAirtableItems.forEach(function searchEdibleFilter(item) {
    // if item.dataset.edibility equals "Edible", then we show it
    if (item.dataset.edibility == "Edible") {
      // if the div has data-edibility "Edible", remove the "edible-filter-hide" class and add the "edible-filter-show" class
      item.classList.remove("edible-filter-hide");
      item.classList.add("edible-filter-show");
      console.log(item);
    } else {
      // if the div does not have data-edibility "Edible", remove the "edible-filter-show" class and add the "edible-filter-hide" class
      item.classList.remove("edible-filter-show");
      item.classList.add("edible-filter-hide");
    }
  });
});

let noedibleFilterBtn = document.getElementById("Non-edible");
noedibleFilterBtn.addEventListener("click", function (event) {
  console.log("non-edible filter being pressed:", event.target.id);
  // search my airtable-item divs, and see which data-edibility equals "Edible"
  // put my airtable-divs in an array [airtable-div 1, airtable-div-2], find the div that has data-edibility
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");

  // search for data-edibility equal to "Edible"
  listofAirtableItems.forEach(function searchNoedibleFilter(item) {
    // if item.dataset.edibility equals "Edible", then we show it
    if (item.dataset.edibility == "Non-edible") {
      // if the div has data-edibility "Edible", remove the "edible-filter-hide" class and add the "edible-filter-show" class
      item.classList.remove("nonedible-filter-hide");
      item.classList.add("nonedible-filter-show");
      console.log(item);
    } else {
      // if the div does not have data-edibility "Edible", remove the "edible-filter-show" class and add the "edible-filter-hide" class
      item.classList.remove("nonedible-filter-show");
      item.classList.add("nonedible-filter-hide");
    }
  });
});

let showAllFilterBtn = document.getElementById("ShowAll");
showAllFilterBtn.addEventListener("click", function (event) {
  console.log("show all filter being pressed:", event.target.id);
  // search my airtable-item divs, and see which data-mood contains "empowering"
  // put my airtable-divs in an array [airtable-div 1, airtable-div-2], find the div tht has data-mood
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");

  // search for data-mood, containg empowering
  listofAirtableItems.forEach(function ShowAllFilter(item) {
    item.classList.remove("filter-hide");
    item.classList.add("filter-show");
  });
});
