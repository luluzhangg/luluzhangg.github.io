//new airtable object
var Airtable = require("airtable");


var base = new Airtable (
  {apiKey:"keyzCVBoGFYt3SVJh"}
).base("appuBBpW92U6TCJ3x");

base("Table 1").select({
  maxRecords: 2,
  view:"Grid view",
})

.eachPage(
   function page(records, fetchNextPage){
// //  console.log ("running page function")
  //   console.log("records", records);
     records.forEach(
     function (record) {
  //   console.log("this is one record", records);
  //   console.log("Family", records.fields);
  //   console.log("Family", records.fields.Family);
  //the name of the function must be after the comma in the console.log
     console.log("picture", record.fields.Photo[0].url);

    var photo = document.createElement("img");
    photo.src = record.fields.Photo[0].url;
    document.body.appendChild(photo);

    }
   )
  }
);

console.log(base);
