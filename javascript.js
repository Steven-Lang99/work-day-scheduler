var currentHour = moment().hour()

var outputDisplay = moment().format("dddd, MMMM Do YYYY");
  var displayDate = document.getElementById("currentDay");
  displayDate.innerText = outputDisplay;

$('.saveBtn').click(function (event){
  event.preventDefault();
  var $inputEl = $(this).parent().children('.time-block');
  
  console.log($inputEl)
})
  
