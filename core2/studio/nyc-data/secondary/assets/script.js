let cardioBtn = document.getElementById("cardio-btn");
let cardioImg = document.getElementById("cardio"); 
cardioBtn.addEventListener("mouseover", () => { 
   cardioImg.style.display = "block"; 
});
cardioBtn.addEventListener("mouseleave", () => { 
    cardioImg.style.display = "none"; 
 });

let respiratoryBtn = document.getElementById("respir-btn");
let respiratoryImg = document.getElementById("respir"); 
respiratoryBtn.addEventListener("mouseover", () => { 
   respiratoryImg.style.display = "block"; 
});
respiratoryBtn.addEventListener("mouseleave", () => { 
    respiratoryImg.style.display = "none"; 
 });

 let nervousBtn = document.getElementById("nervous-btn");
 let nervousImg = document.getElementById("nervous"); 
 nervousBtn.addEventListener("mouseover", () => { 
    nervousImg.style.display = "block"; 
 });
 nervousBtn.addEventListener("mouseleave", () => { 
     nervousImg.style.display = "none"; 
  });
 
let endocrineBtn = document.getElementById("endo-btn");
let endocrineImg = document.getElementById("endo"); 
endocrineBtn.addEventListener("mouseover", () => { 
endocrineImg.style.display = "block"; 
});
endocrineBtn.addEventListener("mouseleave", () => { 
endocrineImg.style.display = "none"; 
});

let immuneBtn = document.getElementById("immune-btn");
let immuneImg = document.getElementById("immune"); 
immuneBtn.addEventListener("mouseover", () => { 
immuneImg.style.display = "block"; 
});
immuneBtn.addEventListener("mouseleave", () => { 
immuneImg.style.display = "none"; 
});

let digestiveBtn = document.getElementById("digest-btn");
let digestiveImg = document.getElementById("digest"); 
digestiveBtn.addEventListener("mouseover", () => { 
digestiveImg.style.display = "block"; 
});
digestiveBtn.addEventListener("mouseleave", () => { 
digestiveImg.style.display = "none"; 
});

let reproductiveBtn = document.getElementById("reprod-btn");
let reproductiveImg = document.getElementById("reprod"); 
reproductiveBtn.addEventListener("mouseover", () => { 
reproductiveImg.style.display = "block"; 
});
reproductiveBtn.addEventListener("mouseleave", () => { 
reproductiveImg.style.display = "none"; 
});

let bodyBtn = document.getElementById("body-btn");
let bodyImg = document.getElementById("body"); 
bodyBtn.addEventListener("mouseover", () => { 
bodyImg.style.display = "block"; 
});
bodyBtn.addEventListener("mouseleave", () => { 
bodyImg.style.display = "none"; 
});

let externalBtn = document.getElementById("external-btn");
let externalImg = document.getElementById("external"); 
externalBtn.addEventListener("mouseover", () => { 
externalImg.style.display = "block"; 
});
externalBtn.addEventListener("mouseleave", () => { 
externalImg.style.display = "none"; 
});

let othersBtn = document.getElementById("other-btn");
let othersImg = document.getElementById("other"); 
othersBtn.addEventListener("mouseover", () => { 
othersImg.style.display = "block"; 
});
othersBtn.addEventListener("mouseleave", () => { 
othersImg.style.display = "none"; 
});

// // Function to render your items
// function renderItems(collection) {
// 	// The `ul` where the items will be inserted
// 	const collectionList = document.getElementById("dataset");

// 	let runningTrue = []; 
// 	let runningFalse = [];

// 	collection.forEach(function(item){
// 		if (item.running == false){
// 			runningFalse.push(item);
// 		} else if (item.running == true){
// 			runningTrue.push(item);
// 		}
// 	});

// 	// Loop through each item in the collection array
// 	collection.forEach(function(item) {
// 		const listItem = document.createElement('div') 
// 		listItem.classList.add("causes");


// 		const itemTitle = document.createElement('h2') 
// 		itemTitle.innerHTML = item.cause 
// 		listItem.appendChild(itemTitle) 

// 		// const itemFamily = document.createElement('h3') 
// 		// itemFamily.innerHTML = item.family 
// 		// listItem.appendChild(itemFamily) 

// 		// const itemColor = document.createElement('h4')
// 		// itemColor.innerHTML = item.colour
// 		// listItem.appendChild(itemColor)

// 		// const itemNotes = document.createElement('h4')
// 		// itemNotes.innerHTML = item.notes
// 		// listItem.appendChild(itemNotes)

// 		// const itemItensity = document.createElement('h4')
// 		// itemItensity.innerHTML = item.intensity 
// 		// listItem.appendChild(itemItensity)

// 		// const itemDetails =
// 		// 	`
//       //       <div class="data-container">
// 		// 		<div class="data-details"></div>
// 		// 		<h4 style="font-weight:500;"><em>"${item.character}"</em></h4>
// 		// 		<img src="${item.image}"></img>
// 		// 		</div>
// 		// 	</div>
// 		// 	`

// 		collectionList.appendChild(listItem) 
// 	})
// }

// fetch('assets/data.json')
// 	.then(function(response) {
// 		return response.json();	
// 	})
// 	.then(function(collection){
// 		renderItems(collection.reverse()) 
// 	})


   