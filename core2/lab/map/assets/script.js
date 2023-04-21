// Function to render your items
function renderItems(collection) {
    // The `ul` where the items will be inserted
    const collectionList = document.getElementById("collection");

    let mapTop = 40.966075123470915;
    let mapBottom = 40.47965191527747;
    let mapLeft = -74.4490818058294;
    let mapRight = -73.52709872546353;

    let mapWidth = mapRight - mapLeft;
    let mapHeight = mapTop - mapBottom;

collection.forEach((item) => {
    let deltaX = mapRight - item.longitude2;
    let percentX = (deltaX / mapWidth) * 100;
    let deltaY = mapTop - item.latitude2; 
    let percentY = (deltaY - mapHeight) * 100;

    if ((item.longitude2 && item.latitude2)) {
        const dotContainer = document.createElement("div");
        dotContainer.classList.add("map-dot");
        collectionList.appendChild(dotContainer);
        dotContainer.style.right = `${percentX}%`;
        dotContainer.style.top = `${percentY}%`;
    }

});


fetch("assets/data-location.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (collection) {
    // And passes the data to the function, above!
    renderItems(collection.reverse()); // In reverse order
  });