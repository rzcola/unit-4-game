
var baseballP1, baseballP2, baseballP3, baseballP4;

var userTotal = 0; 
var homeRuns = 0;
var strikeOuts = 0;
var random;

$(document).ready(function(){

// creating a function called reset//
  function reset() {
        random = Math.floor(Math.random() * 72) + 1;
        console.log("random = ", random)
        $("#random-Number").html("Home Runs to win:" + random);
        baseballP1 = Math.floor(Math.random() * 4) + 1;
        baseballP2 = Math.floor(Math.random() * 4) + 1;
        baseballP3 = Math.floor(Math.random() * 4) + 1;
        baseballP4 = Math.floor(Math.random() * 4) + 1;
        userTotal= 0;
        $('#total-homeruns').html("Home Runs Hit:" + userTotal);
        } 
    
    // initial reset to prep the game//
    reset();

  function hits(){
    alert("Congratulations you are now the New Home run King!!!");
    homeRuns++; 
    $('#number-Wins').html("Number of Home Run Winners:" + homeRuns);
    reset();
  }

  function strike(){
    alert("Better luck next time slugger!")
        strikeOuts++;
        $('#number-Losses').html("Number of Strike Outs:" + strikeOuts);
        reset()
      }

  function totalHruns(number){
      userTotal = userTotal + number;
      $('#total-homeruns').html("Home Runs Hit:" + userTotal);
      console.log("userTotal = ", userTotal);

      if (userTotal === random){
          hits();

      } else if (userTotal > random){
          strike();
      }

  }
  
    $('#bonds').on ('click', function(){
     totalHruns(baseballP1);   
    })  
    $('#griffey').on ('click', function(){
    totalHruns(baseballP2);
    })  
    $('#sosa').on ('click', function(){
    totalHruns(baseballP3);
    })  
    $('#arod').on ('click', function(){
    totalHruns(baseballP4);
    });   
  }); 



