$(document).ready(function() {
  $("#add-city").click(function() {
    $("#new-cities").append('<div class="new-city">' +
                          '<div class="form-group">' +
                          '<label for="new-city">' +
                          '<input type="text" class="form-control new-city">' +
                          '</div>' +
                          '</div>');

  });

  $("#add-visit").click(function() {
    $("#new-visits").append('<div class="new-visit">' +
                            '<div class="form-group">' +
                            '<label for="new-visit">' +
                            '<input type="text" class="form-control new-visit">' +
                            '</div>' +
                            '</div>');

  });


  $("form#new-country").submit(function(event) {
    event.preventDefault();

    var inputtedCountry = $("input#new-country-name").val();

    var newCountry = { name: inputtedCountry, cities: [], visits: [] };

    $(".new-city").each(function() {
      var inputtedCity = $(this).find("input.new-city").val();
      var newCity = { name: inputtedCity };
      newCountry.cities.push(newCity);
    });

    $(".new-visit").each(function() {
      var inputtedVisit = $(this).find("input.new-visit").val();
      var newVisit = { time: inputtedVisit };
      newCountry.visits.push(newVisit);
    });

    $("ul#countries").append("<li><span class='country'>" + newCountry.name + "</span></li>");

    $(".country").last().click(function() {
      $("#show-country").show();

      $("#show-country h2").text(newCountry.name);
      $(".name").text(newCountry.name);
      $("ul#cities").text("");
      newCountry.cities.forEach(function(city) {
        $("ul#cities").append("<li>" + city.name + "</li>");
      });

      $("ul#visits").text("");
      newCountry.visits.forEach(function(visit) {
        $("ul#visits").append("<li>" + visit.time + "</li>");
      });
    });

    $("input.new-country-name").val("");
    $("input.new-city").val("");
    $("input.new-visit").val("");
  });
});
