describe("FizzBuzzGame", function() {
  var game;

beforeEach(function() {
  number = new FizzBuzzGame();
});

it("should return 'FizzBuzz' if number is divisible by 3 and 5", function() {
  expect(number.fizz_buzz_game(15)).toBe('FizzBuzz');
});

it("should return 'Buzz' if number is divisible by 5", function() {
  expect(number.fizz_buzz_game(5)).toBe('Buzz');
});

it("should return 'Fizz' if number is divisible by 3", function() {
  expect(number.fizz_buzz_game(3)).toBe('Fizz');
});

it("should return 1 if number 1", function() {
  expect(number.fizz_buzz_game(1)).toEqual(1);
});

it("should return 0 if number 0", function() {
  expect(number.fizz_buzz_game(0)).toEqual(0);
});

it("should return 864535635647 if number 864535635647", function() {
  expect(number.fizz_buzz_game(864535635647)).toEqual(864535635647);
});

});
