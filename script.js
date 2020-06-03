// Array to generate BlankPage
const genTT = [
{   time: '9am',
    task: ''},
{   time: '10am', 
    task: ''},
{   time: '11am', 
    task: ''},
{   time: '12pm', 
    task: ''},
{   time: '1pm', 
    task: ''},
{   time: '2pm', 
    task: ''},
{   time: '3pm', 
    task: ''},
{   time: '4pm', 
    task: ''},
{   time: '5pm', 
    task: ''}
]

// Checks and Displays Date
const currentDate = moment().format('dddd MMM Do'); 
    document.querySelector('#currentDay').textContent = `${currentDate}`

const checkTime = new Date().getHours();

function genBlank() {
    for (var i = 0 ; i < genTT.length ; i++ ) {
        document.querySelector('#myTimeTable').innerHTML += 
        `
        <tr>
            <th class="text-right" scope="row">${genTT[i].time}</th>
            <td id="_${genTT[i].time}" class="align-middle">${genTT[i].task}</td>
            <td class="align-middle text-right">
              <div class="btn-group" style="">
                <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#editPopup">Add/Edit</button>
                <button type="button" class="btn btn-primary btn-danger btn-sm">X</button>
              </div>
            </td>
        </tr>
        `
    }
}

function timeCheck() {
    for (var i = 0 ; i < genTT.length ; i++ ) {
        switch(genTT[i].time) {
            case '9am':
                if (checkTime == 9) {
                    document.querySelector("#_9am").classList.add("present");
                } else if (checkTime > 9) {
                    document.querySelector("#_9am").classList.add("past");
                } else if (checkTime < 9) {
                    document.querySelector("#_9am").classList.add("future");
                }
                break;
            case '10am':
                if (checkTime == 10) {
                    document.querySelector("#_10am").classList.add("present");
                } else if (checkTime > 10) {
                    document.querySelector("#_10am").classList.add("past");
                } else if (checkTime < 10) {
                    document.querySelector("#_10am").classList.add("future");
                }
                break;
            case '11am':
                if (checkTime == 11) {
                    document.querySelector("#_11am").classList.add("present");
                } else if (checkTime > 11) {
                    document.querySelector("#_11am").classList.add("past");
                } else if (checkTime < 11) {
                    document.querySelector("#_11am").classList.add("future");
                }
                break;
            case '12pm':
                if (checkTime == 12) {
                    document.querySelector("#_12pm").classList.add("present");
                } else if (checkTime > 12) {
                    document.querySelector("#_12pm").classList.add("past");
                } else if (checkTime < 12) {
                    document.querySelector("#_12pm").classList.add("future");
                }
                break;
            case '1pm':
                if (checkTime == 13) {
                    document.querySelector("#_1pm").classList.add("present");
                } else if (checkTime > 13) {
                    document.querySelector("#_1pm").classList.add("past");
                } else if (checkTime < 13) {
                    document.querySelector("#_1pm").classList.add("future");
                }
                break;
            case '2pm':
                if (checkTime == 14) {
                    document.querySelector("#_2pm").classList.add("present");
                } else if (checkTime > 14) {
                    document.querySelector("#_2pm").classList.add("past");
                } else if (checkTime < 14) {
                    document.querySelector("#_2pm").classList.add("future");
                }
                break;
            case '3pm':
                if (checkTime == 15) {
                    document.querySelector("#_3pm").classList.add("present");
                } else if (checkTime > 15) {
                    document.querySelector("#_3pm").classList.add("past");
                } else if (checkTime < 15) {
                    document.querySelector("#_3pm").classList.add("future");
                }
                break;
            case '4pm':
                if (checkTime == 16) {
                    document.querySelector("#_4pm").classList.add("present");
                } else if (checkTime > 16) {
                    document.querySelector("#_4pm").classList.add("past");
                } else if (checkTime < 16) {
                    document.querySelector("#_4pm").classList.add("future");
                }
                break;
            case '5pm':
                if (checkTime == 17) {
                    document.querySelector("#_5pm").classList.add("present");
                } else if (checkTime > 17) {
                    document.querySelector("#_5pm").classList.add("past");
                } else if (checkTime < 17) {
                    document.querySelector("#_5pm").classList.add("future");
                }
                break;
        }
    }
}

genBlank()
timeCheck()