// Initialize Firebase
var config = {
    apiKey: "AIzaSyBZ78vAGGkyI08_2DbnbGLgGeNcB23mciQ",
    authDomain: "trainscheduler-5917a.firebaseapp.com",
    databaseURL: "https://trainscheduler-5917a.firebaseio.com",
    storageBucket: "trainscheduler-5917a.appspot.com",
    messagingSenderId: "565297135477"
};

firebase.initializeApp(config);

var database = firebase.database();

// Button for adding Trains
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  // Train Name
  var trainName = $("#train-name-input").val().trim();
  //  Destination
  var trainDestination = $("#destination-input").val().trim();
  // First Train Time (HH:mm - military time)
  var trainStart = moment($("#start-input").val().trim(), "HH:mm").format("X");
  // Frequency (min)
  var trainRate = $("#rate-input").val().trim();

  // Creates local "temporary" object for holding train data
  var newTrain = {
    name: trainName,
    destination: trainDestination,
    start: trainStart,
    rate: trainRate
  };

  // Uploads train data to the database
  database.ref().push(newTrain);

  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.start);
  console.log(newTrain.rate);

  // Alert
  alert("Train successfully added");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#start-input").val("");
  $("#rate-input").val("");

  // Prevents moving to new page
  return false;
});

// Firebase event for adding train to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainStart = childSnapshot.val().start;
  var trainRate = childSnapshot.val().rate;

  // Train Info
  console.log(trainName);
  console.log(trainDestination);
  console.log(trainStart);
  console.log(trainRate);

  // Prettify the train start
  var trainStartPretty = moment.unix(trainStart).format("HH:mm");

  // Current Time:
  var currentTime = moment().format("HH:mm");
  $("#current-time").html("The current time is " + currentTime);

  // Calculates the minutes away
  var trainMinutes = moment().diff(moment.unix(trainStart, "X"), "mm");
  console.log(trainMinutes);
  //  var trainMinutes = moment().diff(moment.unix(trainStart)).format("HH:mm");
  // console.log(trainMinutes);    
 
  // Add each train's data into the table
  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + trainRate + "</td><td>" + trainStartPretty + "</td><td>" + trainMinutes + "</td></tr>");
});

     var time = new Date().getTime();
     $(document.body).bind("mousemove keypress", function(e) {
         time = new Date().getTime();
     });

     function refresh() {
         if(new Date().getTime() - time >= 60000) 
             window.location.reload(true);
         else 
             setTimeout(refresh, 10000);
     }

     setTimeout(refresh, 10000);