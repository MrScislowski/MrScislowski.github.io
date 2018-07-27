var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbyt3MHtg99alfSwzwZ3L7oyCcE24aajhlDEbhaVWrBQQk7AWEc/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})