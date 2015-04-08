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
      alert("doo doo");



    event.preventDefault();
    });
});
