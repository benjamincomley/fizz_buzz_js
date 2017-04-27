describe("FizzBuzzGame", function() {
  var game;

beforeEach(function() {
  number = new FizzBuzzGame();
});

it("should return 'FizzBuzz' if number is divisible by 3 and 5", function() {
  expect(number.fizz_buzz_game(15)).toBe('FizzBuzz');
});

});
