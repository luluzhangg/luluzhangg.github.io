// Function to render your items
function renderItems(collection) {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById("dataset");

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
		const listItem = document.createElement('div') 
		listItem.classList.add("causes");


		const itemTitle = document.createElement('h3') 
		itemTitle.innerHTML = item.cause 
		listItem.appendChild(itemTitle) 

		const itemArea = document.createElement('p') 
		itemArea.innerHTML = item.area 
		listItem.appendChild(itemArea) 

		const itemSex = document.createElement('p')
		itemSex.innerHTML = item.sex
		listItem.appendChild(itemSex)

		const itemRace = document.createElement('p')
		itemRace.innerHTML = item.ethnicity
		listItem.appendChild(itemRace)

		const itemDeaths = document.createElement('p')
		itemDeaths.innerHTML = item.deaths
		listItem.appendChild(itemDeaths)

		const itemRate = document.createElement('p')
		itemRate.innerHTML = item.rate
		listItem.appendChild(itemRate)

		// const itemDetails =
		// 	`
      //       <div class="data-container">
		// 		<div class="data-details"></div>
		// 		<h4 style="font-weight:500;"><em>"${item.character}"</em></h4>
		// 		<img src="${item.image}"></img>
		// 		</div>
		// 	</div>
		// 	`

		collectionList.appendChild(listItem) 
	})
}

let femaleFilterBtn = document.getElementById("female");
femaleFilterBtn.addEventListener("click", function (event) {
  console.log("female button", event.target.id);
  let listofItems = document.querySelectorAll(".causes");

  listofItems.forEach(function searchCardioFilter(item) {
    if (item.querySelector("p").innerHTML === "female") {
      item.classList.add("filter-show");
      item.classList.remove("filter-hide");
      console.log(item);
    } else {
      item.classList.add("filter-hide");
      item.classList.remove("filter-show");
    }
  });
});

// let maleilterBtn = document.getElementById("male");
// maleFilterBtn.addEventListener("click", function (event) {
//   console.log("male button", event.target.id);
//   let listofItems = document.querySelectorAll(".causes");

//   listofItems.forEach(function searchCardioFilter(item) {
//     if (item.querySelector("p").innerHTML === "female") {
//       item.classList.add("filter-show");
//       item.classList.remove("filter-hide");
//       console.log(item);
//     } else {
//       item.classList.add("filter-hide");
//       item.classList.remove("filter-show");
//     }
//   });
// });

let sortToggleBtn = document.getElementById("sort-toggle");
let isSortingAlphabetically = false;

sortToggleBtn.addEventListener("click", function (event) {
  isSortingAlphabetically = !isSortingAlphabetically;
  sortAirtableItems(isSortingAlphabetically);
});

function sortAirtableItems(isSortingAlphabetically) {
  let container = document.getElementById("dataset");
  let items = Array.from(document.querySelectorAll(".causes"));

  if (isSortingAlphabetically) {
    items.sort((a, b) => {
      let nameA = a.querySelector("p").innerHTML.toLowerCase();
      let nameB = b.querySelector("p").innerHTML.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  } else {
    items.sort((a, b) => a.dataset.index - b.dataset.index);
  }

  items.forEach((item) => container.appendChild(item));
}


fetch('assets/data.json')
	.then(function(response) {
		return response.json();	
	})
	.then(function(collection){
		renderItems(collection.reverse()) 
	})
