// Time for Table
const scheduleTime = ["12am","1am","2am","3am","4am","5am","6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm","9pm","10pm","11pm"]

// Check if there's saved storage
let savedSchedule = localStorage.savedSchedule ? JSON.parse(localStorage.savedSchedule) : []

// Checks and Displays Date
const currentDate = moment().format('dddd MMM Do'); 
    document.querySelector('#currentDay').textContent = `${currentDate}`

// Get current past hours to check against time
const checkTime = new Date().getHours();

// Generate Schedule
function genPage() {
    // Clear Page
    document.querySelector('#myTimeTable').innerHTML = `` 

    for (var idx = 9 ; idx <18 ; idx++ ) {
        document.querySelector('#myTimeTable').innerHTML += 
        `
        <tr>
            <th class="text-right" scope="row">${scheduleTime[idx]}</th>
            <td class="align-middle">   
                <input type="text" class="form-control task${idx}" id="" placeholder="" value="${savedSchedule[idx] ? savedSchedule[idx] : ``}">      
            </td>
            <td class="align-middle text-right">
              <div class="btn-group" style="">
                <button onclick="saveItem(event)" type="button" class="btn btn-primary btn-sm">Save</button>
              </div>
            </td>
        </tr>
        `
        // check time color
        if (checkTime == idx) {
            document.querySelector(`.task${idx}`).classList.add("present");
        } else if (checkTime > idx) {
            document.querySelector(`.task${idx}`).classList.add("past");
        } else if (checkTime < idx) {
            document.querySelector(`.task${idx}`).classList.add("future");
        }
    }
}

// function to save data to localstorage
function saveItem(event) {
    event.preventDefault();

    for (var idx = 9 ; idx < 18 ; idx++) {
    savedSchedule[idx] = document.querySelector(`.task${idx}`).value
    }

    localStorage.savedSchedule = JSON.stringify(savedSchedule)
    console.log('Saved schedule to localstorage !')
}

genPage ()