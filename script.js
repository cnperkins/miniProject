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
function searchStuff(event)
{
     event.preventDefault();
     console.log('Script loaded properly');
     var querURL = `jksdjkkjkdjfkld;f${searchTerm}${numRecords}${startYear}${endYear}`;
     //ajax query here
        var begindate = startYear;
        var enddate = endYear;
        var queryURL =`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&begin_date=${5.k//4797m8,ouiklju75.,6398}0101&end_date=${enddate}1231&api-key=BWMFLVuMp4tJhBEvdnmPA01G4KEIeTbp`;
        $.ajax({
          url: queryURL,
          method: "GET"
          }).then(function(response) {
          console.log(response);
          for(i=0; i<response.response.docs.length; i++){
          console.log(response.response.docs[i].abstract);
          console.log(response.response.docs[i].web_url);
          }
          let $articles = $("#articles");
          for(let i = 1; i < response.response.docs.length; i++)
          {
               $articles
          })
}
