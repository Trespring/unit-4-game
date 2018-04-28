<!-- JAVASCRIPT  -->
  <!-- ========================================= -->
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

  <script type="text/javascript">
 

  // var counter = 0;
  // var numberOptions = [];
  var starting = "";
  var totalScore = 0;
  $("#total-score").text(totalScore);
  var wins = 0;
  var losses = 0;
  
  // var reset = function (){}
  var savedNum = (Math.floor(Math.random() *11+1));
  var savedNum1 = (Math.floor(Math.random() *11+1));
  var savedNum2 = (Math.floor(Math.random() *11+1));
  var savedNum3 = (Math.floor(Math.random() *11+1));


  var targetNumber = Math.floor(Math.random() * 101 + 19);
  $("#number-to-guess").text(targetNumber);
  
  function win (){
    alert("YOU WON!!!!!!!");
    wins++;
    $("#wins").text(wins);
    reset();
  }

  function lose (){
    alert("YOU LOST!!!!!!!");
    losses++;
    $("#losses").text(losses);
    reset();
  }
  
  $("#creature").on("click", function(){
    totalScore = savedNum + totalScore;
    $("#total-score").text(totalScore);
    console.log(totalScore);
    
    if (totalScore === targetNumber)
    {
      win ();
    }
    else if (totalScore > targetNumber) 
    {
      lose ();
    }

  });   

  $("#creature1").on("click", function(){
    totalScore = savedNum1 + totalScore;
    $("#total-score").text(totalScore);
    console.log(totalScore);
    
    if (totalScore === targetNumber)
    {
      win ();
    }
    else if (totalScore > targetNumber) 
    {
      lose ();
    }

  });   


  $("#creature2").on("click", function(){
    totalScore = savedNum2 + totalScore;
    $("#total-score").text(totalScore);
    console.log(totalScore);
    
    if (totalScore === targetNumber)
    {
      win ();
    }
    else if (totalScore > targetNumber) 
    {
      lose ();
    }

  });   


  $("#creature3").on("click", function(){
    totalScore = savedNum3 + totalScore;
    $("#total-score").text(totalScore);
    console.log(totalScore);
    
    if (totalScore === targetNumber)
    {
      win ();
    }
    else if (totalScore > targetNumber) 
    {
      lose ();
    }

  });   


  
  </script>