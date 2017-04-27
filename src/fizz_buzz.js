function FizzBuzzGame(){
}

FizzBuzzGame.prototype.fizz_buzz_game = function(num){
  if (num === 0)
    return num;
  else if (num % 3 === 0 && num % 5 === 0)
    return ("FizzBuzz");
  else if (num % 5 === 0)
    return ("Buzz");
  else if (num % 3 === 0)
    return ("Fizz");
  else
    return num;
}
