
const PROPERTIES = [
  { type: "T", buildTime: 5, earnings: 1500 },
  { type: "P", buildTime: 4, earnings: 1000 },
  { type: "C", buildTime: 10, earnings: 2000 },
];

function maxProfit(time) {
  if (!Number.isSafeInteger(time) || time < 0) {
    throw new Error("Time must be a non-negative integer.");
  }

  const dp = Array.from({ length: time + 1 }, () => ({
    earnings: 0,
    solutions: [{ T: 0, P: 0, C: 0 }],
  }));

  for (let t = 1; t <= time; t++) {
    let bestEarnings = 0;
    let bestSolutions = [{ T: 0, P: 0, C: 0 }];

    for (const property of PROPERTIES) {
      if (property.buildTime >= t) {
        continue;
      }

      const remainingTime = t - property.buildTime;

      const earnings =
        remainingTime * property.earnings +
        dp[remainingTime].earnings;

      const solutions = dp[remainingTime].solutions.map(
        (solution) => ({
          ...solution,
          [property.type]: solution[property.type] + 1,
        })
      );

      if (earnings > bestEarnings) {
        bestEarnings = earnings;
        bestSolutions = solutions;
      } else if (earnings === bestEarnings) {
        bestSolutions.push(...solutions);
      }
    }

    // Remove duplicate property combinations.
    const uniqueSolutions = [
      ...new Map(
        bestSolutions.map((solution) => [
          `${solution.T}-${solution.P}-${solution.C}`,
          solution,
        ])
      ).values(),
    ];

    dp[t] = {
      earnings: bestEarnings,
      solutions: uniqueSolutions,
    };
  }

  return dp[time];
}

module.exports = { maxProfit };

// Command-line execution
if (require.main === module) {
  try {
    const input = process.argv[2];

    if (input === undefined || input.trim() === "") {
      throw new Error("Usage: node solution.js <time>");
    }

    const time = Number(input);
    const result = maxProfit(time);

    console.log(`Time Unit: ${time}`);
    console.log(`Earnings: $${result.earnings}`);
    console.log("Solutions:");

    result.solutions.forEach((solution, index) => {
      console.log(
        `${index + 1}. T: ${solution.T} P: ${solution.P} C: ${solution.C}`
      );
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exitCode = 1;
  }
}
