
const test = require("node:test");
const assert = require("node:assert/strict");
const { maxProfit } = require("./solution");

test("Time 7 returns both optimal solutions", () => {
  const result = maxProfit(7);

  assert.equal(result.earnings, 3000);
  assert.equal(result.solutions.length, 2);

  assert.deepEqual(result.solutions, [
    { T: 1, P: 0, C: 0 },
    { T: 0, P: 1, C: 0 },
  ]);
});

test("Time 8 returns one theatre", () => {
  assert.deepEqual(maxProfit(8), {
    earnings: 4500,
    solutions: [{ T: 1, P: 0, C: 0 }],
  });
});

test("Time 13 returns two theatres", () => {
  assert.deepEqual(maxProfit(13), {
    earnings: 16500,
    solutions: [{ T: 2, P: 0, C: 0 }],
  });
});

test("Zero time returns zero earnings", () => {
  assert.deepEqual(maxProfit(0), {
    earnings: 0,
    solutions: [{ T: 0, P: 0, C: 0 }],
  });
});

test("Insufficient construction time", () => {
  assert.equal(maxProfit(3).earnings, 0);
});

test("Time 5 returns one pub", () => {
  assert.deepEqual(maxProfit(5), {
    earnings: 1000,
    solutions: [{ T: 0, P: 1, C: 0 }],
  });
});

test("Reject negative time", () => {
  assert.throws(() => maxProfit(-1));
});

test("Reject decimal time", () => {
  assert.throws(() => maxProfit(5.5));
});

test("Reject invalid input", () => {
  assert.throws(() => maxProfit("abc"));
});

test("Return unique property combinations", () => {
  const result = maxProfit(20);

  const unique = new Set(
    result.solutions.map((solution) =>
      JSON.stringify(solution)
    )
  );

  assert.equal(unique.size, result.solutions.length);
});
