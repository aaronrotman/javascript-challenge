// from data.js
var tableData = data;
// Use D3 to select the table body
var tbody = d3.select("tbody");


tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value)});
    });

