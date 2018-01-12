
let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
let queryString = '';
let startYear = '';
let endYear = '';


$("#search-btn").on("click", (e) => {
  e.preventDefault();
  console.log("clicked search button!");
  // $(".article-list").html("<h1>jQuery Working!</h1");

  queryString = $("#search-term").val();
  startYear = $("#start-year").val();
  endYear = $("#end-year").val();

  url += '?' + $.param({
    'q': queryString,
    'begin_date': startYear,
    'end_date': endYear
  });

  console.log(url);

  // $.ajax({
  //   url: url,
  //   method: 'GET',
  // }).done(function(result) {
  //   console.log(result);
  // }).fail(function(err) {
  //   throw err;
  // });
});

