let $searchTerm = $("#searchTerm");
let $numRecords = $("#numRecords");
let $startYear = $("#startYear");
let $endYear = $("#endYear");
let numRecords = parseInt($numRecords.attr("id"));
let searchTerm = $searchTerm.val();
let startYear = parseInt($startYear.attr("id"));
let endYear = parseInt($endYear.attr("id"));
let $searchButton = $("#search");
let $resetButton = $("reset");

var querURL = `jksdjkkjkdjfkld;f${searchTerm}${numRecords}${startYear}${endYear}`;
$searchButton.on("click", searchStuff);
$searchTerm.on('keypress', keyPress);
$numRecords.on('keypress', keyPress);
$startYear.on('keypress', keyPress);
$endYear.on('keypress', keyPress);




function keyPress(e)
{
     if (e.key === 'Enter') 
     {
       searchStuff();
     }
}
function searchStuff()
{
     //ajax query
}
