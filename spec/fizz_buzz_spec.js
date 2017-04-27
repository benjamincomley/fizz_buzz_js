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

});
