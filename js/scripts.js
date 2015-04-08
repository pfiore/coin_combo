var coinCombo = function(cents) {

  //an array where coins[0] = pennies, coins[1] = nickles, [2] = dimes, [3] = quarters
  var coins = [0, 0, 0, 0];

  // var cents = 1;
  var dimes = parseInt(cents / 10);
  coins[2] = dimes;
  var cents_remaining = cents % 10;

  var nickles = parseInt(cents_remaining / 5);
  coins[1] = nickles;
  var cents_remaining = cents % 5;

  var pennies = cents_remaining;
  coins[0] = pennies;


  return coins;

};

$(document).ready(function() {
    $("form#cents").submit(function(event) {




    event.preventDefault();
    });
});
