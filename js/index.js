/*
  This is the JavaScript code for
  "index"
  File: vlor12_final\docs\index.html
*/
function index() {
  // Your code goes in here. 
  // Declare your variables

  var loopTest = true;
  var bowlingScore = [];
  var bowlingScoreIn; 
  var total = 0;  
    
  while(loopTest == true) {
    bowlingScoreIn = prompt("Enter a bowling score or enter done to end.");
    if (bowlingScoreIn === "done") {
      loopTest = false;
    }  else {
       bowlingScore.push(bowlingScoreIn);      
       total += Number(bowlingScoreIn);
    }
  }  
  document.write("You entered " + bowlingScore.length + " bowling scores. <br />");
  for(var index = 0; index < bowlingScore.length; index++) { 
    document.write("Score entered:  " + bowlingScore[index] + "<br />");
  }
  document.write("Total of all scores entered:  " + total + "<br />");
  document.write("Great job bowling today!");
}
index();
