var coinCombo = function(cents) {

  //an array where coins[0] = pennies, coins[1] = nickles, [2] = dimes, [3] = quarters
  var coins = [0, 0, 0, 0];

  var quarters = parseInt(cents / 25);
  coins[3] = quarters;
  cents = cents % 25;

  var dimes = parseInt(cents / 10);
  coins[2] = dimes;
  cents = cents % 10;

  var nickles = parseInt(cents / 5);
  coins[1] = nickles;
  var cents = cents % 5;

  coins[0] = cents;


  return coins;

};

$(document).ready(function() {
    $("form#coin-combo").submit(function(event) {
      var cents = $("input#cents").val();

      var result = coinCombo(cents);

      var pennies = result[0];
      var nickles = result[1];
      var dimes = result[2];
      var quarters = result[3];

      var change = [];


      if (quarters != 0) {
        change.push(quarters + " quarters");
      }
      if (dimes != 0) {
        change.push(dimes + " dimes");
      }
      if (nickles != 0) {
        change.push(nickles + " nickles");
      }
      if (pennies != 0) {
        change.push(pennies + " pennies");
      }
      if (change.length == 0) {
        $("#error").show();
        $("#result").hide();
      }

      else {
      var string = change.join(", ");
      $("#result").show();
      $("#error").hide();
      }





    $(".coins").text(string);


    event.preventDefault();
    });

    $("#clear").click(function(event) {
      $("#result").hide();
      $("#error").hide();
      $("#cents").val("").focus();

      event.preventDefault();
    });
});
