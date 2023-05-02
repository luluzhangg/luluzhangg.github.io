// Function to render your items
function renderItems(collection) {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById("collection");

	let runningTrue = []; 
	let runningFalse = [];

	collection.forEach(function(item){
		if (item.running == false){
			runningFalse.push(item);
		} else if (item.running == true){
			runningTrue.push(item);
		}
	});

	// Loop through each item in the collection array
	collection.forEach(function(item) {
		const listItem = document.createElement('div') // Make the `div
		listItem.classList.add("fragrance");


		// You can make each element inside of that...
		const itemTitle = document.createElement('h2') // Make an `h2`
		itemTitle.innerHTML = item.name // Put the JSON squirrel id inside
		listItem.appendChild(itemTitle) // And add it to the `div`!

		const itemFamily = document.createElement('h3') // And another h2
		itemFamily.innerHTML = item.family // Put the fur color in the html
		listItem.appendChild(itemFamily) // And add that too

		const itemColor = document.createElement('h4')
		itemColor.innerHTML = item.colour
		listItem.appendChild(itemColor)

		const itemNotes = document.createElement('h4')
		itemNotes.innerHTML = item.notes
		listItem.appendChild(itemNotes)

		const itemItensity = document.createElement('h4')
		itemItensity.innerHTML = item.intensity 
		listItem.appendChild(itemItensity)

		// const itemImage = document.createElement('img')
		// itemImage.innerHTML = item.image 
		// listItem.appendChild(itemImage)

		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
			`
            <div class="data-container">
				<div class="data-details"></div>
				<h4 style="font-weight:500;"><em>"${item.character}"</em></h4>
				<img src="${item.image}"></img>
				</div>
			</div>
			`

		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

	
		if (item.intensity == "4/4") { // If this is `true`
			listItem.classList.add("four") // Add this class to the whole `li`
		}

		if (item.itensity == "3/4") { // If this is `true`
			listItem.classList.add("three") // Add this class to the whole `li`
		}

		if (item.intensity == "2/4") { // If this is `true`
			listItem.classList.add("two") // Add this class to the whole `li`
		}

		if (item.intensity == "1/4") { // If this is `true`
			listItem.classList.add("one") // Add this class to the whole `li`
		}



		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
}

let sensualFilterBtn = document.getElementById("Sensual");
sensualFilterBtn.addEventListener("click", function (event) {
  console.log("sensual button", event.target.id);
  let listofItems = document.querySelectorAll(".fragrance");

  listofItems.forEach(function searchSensualFilter(item) {
    if (item.querySelector("h3").innerHTML === "Sensual") {
      item.classList.add("filter-show");
      item.classList.remove("filter-hide");
      console.log(item);
    } else {
      item.classList.add("filter-hide");
      item.classList.remove("filter-show");
    }
  });
});

let warmFilterBtn = document.getElementById("Warm");
warmFilterBtn.addEventListener("click", function (event) {
  console.log("warm button", event.target.id);
  let listofItems = document.querySelectorAll(".fragrance");

  listofItems.forEach(function searchWarmFilter(item) {
    if (item.querySelector("h3").innerHTML === "Warm") {
      item.classList.add("filter-show");
      item.classList.remove("filter-hide");
      console.log(item);
    } else {
      item.classList.add("filter-hide");
      item.classList.remove("filter-show");
    }
  });
});

let floralFilterBtn = document.getElementById("Florals");
floralFilterBtn.addEventListener("click", function (event) {
  console.log("floral button", event.target.id);
  let listofItems = document.querySelectorAll(".fragrance");

  listofItems.forEach(function searchFloralFilter(item) {
    if (item.querySelector("h3").innerHTML === "Floral") {
      item.classList.add("filter-show");
      item.classList.remove("filter-hide");
      console.log(item);
    } else {
      item.classList.add("filter-hide");
      item.classList.remove("filter-show");
    }
  });
});

let lfloralFilterBtn = document.getElementById("Lflorals");
lfloralFilterBtn.addEventListener("click", function (event) {
  console.log("light-floral button", event.target.id);
  let listofItems = document.querySelectorAll(".fragrance");

  listofItems.forEach(function searchLfloralFilter(item) {
    if (item.querySelector("h3").innerHTML === "Light-floral") {
      item.classList.add("filter-show");
      item.classList.remove("filter-hide");
      console.log(item);
    } else {
      item.classList.add("filter-hide");
      item.classList.remove("filter-show");
    }
  });
});

let ffloralFilterBtn = document.getElementById("Fflorals");
ffloralFilterBtn.addEventListener("click", function (event) {
  console.log("fruity-floral button", event.target.id);
  let listofItems = document.querySelectorAll(".fragrance");

  listofItems.forEach(function searchFfloralFilter(item) {
    if (item.querySelector("h3").innerHTML === "Fruity-floral") {
      item.classList.add("filter-show");
      item.classList.remove("filter-hide");
      console.log(item);
    } else {
      item.classList.add("filter-hide");
      item.classList.remove("filter-show");
    }
  });
});

let allFilterBtn = document.getElementById("All");
allFilterBtn.addEventListener("click", function (event) {
  console.log("show all filter being pressed:", event.target.id);
  let listofItems = document.querySelectorAll(".fragrance");

  listofItems.forEach(function AllFilter(item) {
    item.classList.remove("filter-hide");
    item.classList.add("filter-show");
  });
});

// let toolTip = document.querySelector('tool-tip')

// const diorTitle = document.getElementById("title");

// diorTitle.addEventListener('mouseeneter', function (event) {
//   toolTip.classList.add('hovering')
// })

// diorTitle.addEventListener('mouseleave', function (event) {
//   toolTip.classList.remove('hovering')
// })


// const diorTitle = document.getElementById("title")
//       diorTitle.addEventListener("mouseover", showTooltip);
//       diorTitle.addEventListener("mouseout", hideTooltip);
//       function showTooltip() {
//          const toolTip = document.querySelector(".tool-tip");
//          toolTip.classList.add('hovering');
//       }
//       function hideTooltip() {
//          const toolTip = document.querySelector(".tool-tip");
//          toolTip.classList.remove('hovering');
//       } 

// Fetch gets your JSON file.
fetch('assets/data.json')
	.then(function(response) {
		return response.json();	
	})
	.then(function(collection){
		// And passes the data to the function, above!
		renderItems(collection.reverse()) // In reverse order
	})
