# trainScheduler
(HW Week 7 - Train Scheduler)
## Live Link
 - https://wardcj1.github.io/trainScheduler

## HW Requirements
#### A train schedule application that incorporates Firebase to host arrival and departure data. The app will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station. "Minutes to arrival" and "next train time" text updates once every minute. 


- 

## Technologies Used
- Jquery for Dom Manipulation
- html
- css
- bootstrap

## Sample Code Used

  var currentTime = moment().format("HH:mm");
  $("#current-time").html("The current time is " + currentTime);

    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");

