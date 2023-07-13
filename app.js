// Get the input elements
const inputDay = document.querySelector('.input_day');
const inputMonth = document.querySelector('.input_month');
const inputYear = document.querySelector('.input_year');
const inputs = document.querySelectorAll(".input");

// Get the output elements
const outputYear = document.querySelector('.output_year');
const outputMonth = document.querySelector('.output_month');
const outputDay = document.querySelector('.output_day');
const totalDay = document.querySelector('.output_totalDay');
const total_Day_Display = document.querySelector('.output_total');


// Get input labels
const day_label = document.querySelector(".day label");
const year_label = document.querySelector(".year label");
const month_label = document.querySelector(".month label");


// Get input errors
const day_err = document.querySelector(".day_err");
const month_err = document.querySelector(".month_err");
const year_err = document.querySelector(".year_err");


const changeDay = document.querySelector('.d')
const changeMonth = document.querySelector('.m')
const changeYear = document.querySelector('.y')
const changeTotalDays = document.querySelector('.ld')

// Add event listener to the arrow image for age calculation
const arrowImage = document.querySelector('.arrow img');


arrowImage.addEventListener('click', () => {
  calculateAge();
});



function calculateAge() {
  // Get the current date
  const currentDate = new Date();

  // Get the inputted date
  const inputDate = new Date(inputYear.value, inputMonth.value - 1, inputDay.value);

  // Calculate the age difference in milliseconds
  const ageInMilliseconds = currentDate - inputDate;

  // Convert milliseconds to days
  const ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));

  // Extract the age components
  const ageYears = Math.floor(ageInDays / 365);
  const ageMonths = Math.floor((ageInDays % 365) / 30);
  const ageDays = (ageInDays % 365) % 30;





  // Day Validation
function day() {
    if(inputDay.value === ""){
        day_err.style.display = "block"
        day_err.innerHTML = "This field is required"
        day_label.style.color = "#ff5757"
        inputs[0].style.borderColor = "#ff5757"
        outputDay.textContent = `0`
        outputMonth.textContent = `0`
        outputYear.textContent = `0`
        total_Day_Display.style.display = "none";
    }else if(inputDay.value <= 0 || inputDay.value > 31 ){
        day_err.style.display = "block"
        day_label.style.color = "#ff5757"
        inputs[0].style.borderColor = "#ff5757"
        day_err.innerHTML = "Must be a valid date"
        outputDay.textContent = `0`
        outputMonth.textContent = `0`
        outputYear.textContent = `0`
        total_Day_Display.style.display = "none";
    }
    else if(inputMonth.value <= 0 || inputMonth.value > 12){
      month_err.style.display = "block"
      month_err.innerHTML = "Must be a valid month"
      month_label.style.color = "#ff5757"
      inputs[1].style.borderColor = "#ff5757"
      outputDay.textContent = `0`
      outputMonth.textContent = `0`
      outputYear.textContent = `0`
      total_Day_Display.style.display = "none";
  }
  else if(inputYear.value <= 0 || ageInDays < 0){
    year_err.style.display = "block"
    year_err.textContent = "Must be in the past"
    year_label.style.color = "#ff5757"
    inputs[2].style.borderColor = "#ff5757"
    outputDay.textContent = `0`
    outputMonth.textContent = `0`
    outputYear.textContent = `0`
    total_Day_Display.style.display = "none";
  }
    else{
      outputDay.textContent = ageDays;
      total_Day_Display.style.display = "block";
    }
    
}


// Month Validation
function month() {
    if(inputMonth.value === ""){
        month_err.style.display = "block"
        month_err.innerHTML = "This field is required"
        month_label.style.color = "#ff5757"
        inputs[1].style.borderColor = "#ff5757"
        outputDay.textContent = `0`
        outputMonth.textContent = `0`
        outputYear.textContent = `0`
        total_Day_Display.style.display = "none";
    }
    else if(inputDay.value <= 0 || inputDay.value > 31 ){
      day_err.style.display = "block"
      day_label.style.color = "#ff5757"
      inputs[0].style.borderColor = "#ff5757"
      day_err.innerHTML = "Must be a valid date"
      outputDay.textContent = `0`
      outputMonth.textContent = `0`
      outputYear.textContent = `0`
      total_Day_Display.style.display = "none";
  }
    else if(inputMonth.value <= 0 || inputMonth.value > 12){
        month_err.style.display = "block"
        month_err.innerHTML = "Must be a valid month"
        month_label.style.color = "#ff5757"
        inputs[1].style.borderColor = "#ff5757"
        outputDay.textContent = `0`
        outputMonth.textContent = `0`
        outputYear.textContent = `0`
        total_Day_Display.style.display = "none";
    }
    else if(inputYear.value <= 0 || ageInDays < 0){
      year_err.style.display = "block"
      year_err.textContent = "Must be in the past"
      year_label.style.color = "#ff5757"
      inputs[2].style.borderColor = "#ff5757"
      outputDay.textContent = `0`
      outputMonth.textContent = `0`
      outputYear.textContent = `0`
      total_Day_Display.style.display = "none";
    }
    else{
      outputMonth.textContent = ageMonths;
      total_Day_Display.style.display = "block";
    }
}


  // Year Validation
function year() {
    if(inputYear.value === ""){
        year_err.style.display = "block"
        year_err.innerHTML = "This field is required"
        year_label.style.color = "#ff5757"
        inputs[2].style.borderColor = "#ff5757"
        outputDay.textContent = `0`
        outputMonth.textContent = `0`
        outputYear.textContent = `0`
        total_Day_Display.style.display = "none";
    }
    else if(inputDay.value <= 0 || inputDay.value > 31 ){
      day_err.style.display = "block"
      day_label.style.color = "#ff5757"
      inputs[0].style.borderColor = "#ff5757"
      day_err.innerHTML = "Must be a valid date"
      outputDay.textContent = `0`
      outputMonth.textContent = `0`
      outputYear.textContent = `0`
      total_Day_Display.style.display = "none";
  }
  else if(inputMonth.value <= 0 || inputMonth.value > 12){
    month_err.style.display = "block"
    month_err.innerHTML = "Must be a valid month"
    month_label.style.color = "#ff5757"
    inputs[1].style.borderColor = "#ff5757"
    outputDay.textContent = `0`
    outputMonth.textContent = `0`
    outputYear.textContent = `0`
    total_Day_Display.style.display = "none";
}
    else if(inputYear.value <= 0 || ageInDays < 0){
      year_err.style.display = "block"
      year_err.textContent = "Must be in the past"
      year_label.style.color = "#ff5757"
      inputs[2].style.borderColor = "#ff5757"
      outputDay.textContent = `0`
      outputMonth.textContent = `0`
      outputYear.textContent = `0`
      total_Day_Display.style.display = "none";
    }
    else{
      let output = 0;
      const timer = setInterval(() => {
        outputYear.textContent = output;
         if( output === ageYears ){
            clearInterval(timer);
         }else{
           output++;
         }
        }, 20);

      total_Day_Display.style.display = "block"
    }
}

// Full Days Validation
function daySet(){
  if(inputDay.value == "" && inputMonth.value == "" && inputYear.value == ""){
    total_Day_Display.style.display = "none";
    totalDay.textContent = `0`;
  }
  else{
      totalDay.textContent = ageInDays;
  }
}


// Making sure there is no grammatical error :)
  if (ageDays == 1) {
    changeDay.textContent = `Day`
  }
  else{
    changeDay.textContent = `Days`
  }

  if (ageMonths == 1) {
    changeMonth.textContent = `Month`
  }
  else{
    changeMonth.textContent = `Months`
  }

  if (ageYears == 1) {
    changeYear.textContent = `Year`
  }
  else{
    changeYear.textContent = `Years`
  }

  if (ageInDays == 1) {
    changeTotalDays.textContent = `Day`
  }else{
    changeTotalDays.textContent = `Days`
  }

  // Display the calculated age
    day();
    month();
    year();
    daySet();
}




//   // Calculate the difference in milliseconds
//   const ageInMilliseconds = currentDate - inputDate;

//   // Convert milliseconds to years, months, and days
//   const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365;
//   console.log(ageInMilliseconds + ' ' + 'agemillisecs');
//   console.log(millisecondsPerYear + ' ' + 'yearmillisecs');

//   const ageInYears = Math.floor(ageInMilliseconds / millisecondsPerYear);

//   const ageInMonths = Math.floor((ageInMilliseconds % millisecondsPerYear) / (1000 * 60 * 60 * 24 * 30));

//   const ageInDays = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

//   const totalDays = Math.floor( ageInMilliseconds * (1000 * 60 * 60 * 24 * 30))



