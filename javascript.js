var currentHour = moment().hour()
var timeEl = document.querySelectorAll('.time-block')
// this for my time at the top
var outputDisplay = moment().format("dddd, MMMM Do YYYY");
var displayDate = document.getElementById("currentDay");
displayDate.innerText = outputDisplay;


//function to get the hours to change based on what hour it is
function calendarHours() {
  var currentHour = moment().hour()


  $(timeEl).each(function () {
    var timeblock = parseInt($(this).attr("id").split('hour')[1])

    if (timeblock < currentHour) {
      this.classList.add("past");
      this.classList.remove("future");
      this.classList.remove("present");
    }
    else if (timeblock === currentHour) {
      this.classList.remove("past");
      this.classList.add("present");
      this.classList.remove("future");
    }
    else {
      this.classList.remove("present");
      this.classList.remove("past");
      this.classList.add("future");
    }
  })
}


var $inputEl = $(this).parent().find('.description').val();

var descriptionEl = document.querySelector('.description')

$('.saveBtn').click(storeData)

function storeData(obj) {
  var $icon = $(obj.target);
  var $parent = $icon.parent();
  var textareaValue = $parent.find('.description').val();
  var hourText = $parent.attr('id');

  localStorage.setItem(hourText, JSON.stringify(textareaValue))
}




$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour1 .description').val(localStorage.getItem('hour1'));
$('#hour2 .description').val(localStorage.getItem('hour2'));
$('#hour3 .description').val(localStorage.getItem('hour3'));
$('#hour4 .description').val(localStorage.getItem('hour4'));
$('#hour5 .description').val(localStorage.getItem('hour5'));

calendarHours();