const key = keyHolder.NYT_KEY;
let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
let queryString = '';
let startYear = 0;
let endYear = 0;

const clearForm = () => {
  $("#search-term").val('');
  $("#select-number").val(1);
  $("#start-year").val('');
  $("#end-year").val('');
}

const formatYear = (year) => {
  year === 2018
    ? year = moment().format('YYYYMMDD')
    : year = `${year}0101`
  return year;
}


$("#search-btn").on("click", (e) => {
  e.preventDefault();

  // console.log(`Start year field is ${$("#start-year").val()}; end year field is ${$("#end-year").val()}`)
  // console.log(`Start year is ${startYear}; end year is ${endYear}`);

  queryString = $("#search-term").val();

  // if start-year field is empty
  !$("#start-year").val()
    // yes? set startYear to 1900
    ? startYear = formatYear(1900)
    // no? set startYear to a formatted version of the value of start-year
    : startYear = formatYear($("#start-year").val())
    
  // if end-year field is empty
  !$("#end-year").val()
    // yes? set endYear to a formatted version of the current year
    ? endYear = formatYear(moment().format('YYYY'))
    // no? set endYear to a formatted version of the value of end-year
    : endYear = formatYear($("#end-year").val()) 

  console.log(`Start year is ${startYear}; end year is ${endYear}`);

  url += '?' + $.param({
    'api-key': key,
    'q': queryString,
    'begin_date': startYear,
    'end_date': endYear
  });

  console.log(url);

  $.ajax({
    method: 'GET',
    url: url
  }).done((result) => {
    console.log(result.response.docs[0].headline.print_headline);
  })
});

