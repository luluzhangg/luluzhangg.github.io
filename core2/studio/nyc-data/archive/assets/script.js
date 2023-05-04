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

fetch('assets/data.json')
	.then(function(response) {
		return response.json();	
	})
	.then(function(collection){
		renderItems(collection.reverse()) 
	})
