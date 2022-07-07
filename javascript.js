var currentHour = moment().hour()
var timeEl = document.querySelectorAll('.time-block')
// this for my time at the top
var outputDisplay = moment().format("dddd, MMMM Do YYYY");
  var displayDate = document.getElementById("currentDay");
  displayDate.innerText = outputDisplay;


  //function to get the hours to change based on what hour it is
function calendarHours() {
 

  timeEl.forEach((hour)=>{

      
      if (hour < currentHour) {
        hour.classList.add("past");
        hour.classList.remove("future");
        hour.classList.remove("present");
      }
      else if (hour === currentHour) {
        hour.classList.remove("past");
        hour.classList.add("present");
        hour.classList.remove("future");
      }
      else {
        hour.classList.remove("present");
        hour.classList.remove("past");
        hour.classList.add("future");
      }
  })
}
calendarHours(); 


//tried working on the save button

// $('.saveBtn').click(function (event){
//   event.preventDefault();
//   var $inputEl = $(this).parent().children('.time-block');
  
//   console.log($inputEl)
// })