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

const currentDate = moment().format('dddd MMM Do'); 


function genBlank() {
    var checkTime = new Date().getHours();
    for (var i = 0 ; i < genTT.length ; i++ ) {
        document.querySelector('#myTimeTable').innerHTML += 
        `
        <tr>
            <th class="align-middle" scope="row">${genTT[i].time}</th>
            <td id="${genTT[i].time}" class="align-middle">${genTT[i].task}</td>
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

function timeCheck(){
    if ()
}
genBlank()

document.querySelector('#currentDay').textContent = `${currentTime}`