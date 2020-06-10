// from data.js
var tableData = data;
// Use D3 to select the table body
var tbody = d3.select("tbody");
var tr = d3.select("tr");

fullTable = renderTable(tableData);

// Select the input form button
var inputButton = d3.select("#input-button");
// Select the input form
var inputForm = d3.select("#date-input-form");

// Event listeners for clicking the button and pressing the enter key
inputButton.on("click", filterDates);
inputForm.on("submit", filterDates);

function filterDates () {
  // Prevent page from refreshing
  d3.event.preventDefault();

  // Select input element
  var inputElement = d3.select("#date-input-form")

  // Get value property from selected element
  var inputValue = inputElement.property("value");
  
  // Log the input to the console
  console.log(`Date entered: ${inputValue}`);

  // Filter the data to match the input date
  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  // Log the filtered data to the console
  console.log(filteredData);
  // Rerender the table to show only sighting that match the input date
  newTable = renderTable(filteredData);
}; 

function clearTable() {
  tbody.html("");
};

function renderTable(data) {
  // Clear the table before rendering
  clearTable();
  // Append a table of the UFO sightings data to the page
  data.forEach((sighting) => {
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value)});
  }); 
};