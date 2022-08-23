var currentHour = moment().hour()
var timeEl = document.querySelectorAll('.time-block')
// this for my time at the top
var outputDisplay = moment().format("dddd, MMMM Do YYYY");
var displayDate = document.getElementById("currentDay");
displayDate.innerText = outputDisplay;


var $inputEl = $(this).parent().find('.description').val();

var descriptionEl = document.querySelector('.description')

$('.saveBtn').click(storeData)
//Function to store data
function storeData(obj) {
  var $icon = $(obj.target);
  var $parent = $icon.parent();
  var textareaValue = $parent.find('.description').val();
  var hourText = $parent.attr('id');

  localStorage.setItem(hourText, JSON.stringify(textareaValue))
}
//Function for the calendar hours
function calendarHours() {
  var currentHour = moment().hour()


  $(".time-block").each(function () {
    var timeblock = parseInt($(this).attr("id").split('hour')[1])

    if (timeblock < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    }
    else if (timeblock === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    }
    else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  })
}


//Where the descriptions will be stored
$('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));

calendarHours();
