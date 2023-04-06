
var Airtable = require("airtable");
var base = new Airtable({
  apiKey: "keyzCVBoGFYt3SVJh",
}).base("appuBBpW92U6TCJ3x");

function filterItems(type, filter){
  let allItems = Array.from(document.querySelectorAll('grid-items'))

  let filteredItems = allItems.filter((item) => item.dataset.nickname == 'Beefsteak Mushroom')

  console.log(filteredItems)
}

base("Table 1")
  .select({
    // Selecting the first 5 records in Grid view:
    maxRecords: 50,
    view: "Grid view",
  })
  .eachPage(
    function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function (item, index) {
        console.log("item", item.fields);

        let gridItems = document.querySelector(".");

      //  let gridItem

        gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.setAttribute("data-title", item.fields.title);

        let itemTitle = document.createElement("h2");
        itemTitle.classList.add('grid-item--title')
        itemTitle.innerHTML = item.fields.nickname
        gridItem.append(itemTitle);

        let itemImage = document.createElement("img");
        itemImage.classList.add('grid-item--image')
        itemImage.src = item.fields.photo[0].url
        gridItem.append(itemImage);

        gridItems.append(gridItem);
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );
