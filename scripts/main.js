/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

var hand= {

  function handValue (hand) {
    let value = 0;
    let value2 = 0;
    for (i = 0; 1<hand.length, i++)
      if (hand [i]) === 'J' || hand[i] === 'Q' || hand[i] === 'K' {
        value += 10;
        value2 =+ 10;
      } else if (hand[i]) === 'A' {
        value += 11;
        value2 += 1;
      } else {
        value += Number(hand[i]);
        value2 += Number(hand[i]);
      }
      if (value > 21) {
        value = value2
      }
      }
      }
  }
}


}//end of 1st for
}//end of handValue(hand)
/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
